import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleCardLike = ((card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const promise = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id);
    promise.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  });

  const handleCardDelete = ((cardId) => {
    api.deleteCard(cardId).then(() => {
      setCards((state) => state.filter((c) => c._id !== cardId));
    })
  });

  const handleUpdateUser = ((userProfile) => {
    api.changeUserProfile(userProfile).then(user => {
      setCurrentUser(user);
      closeAllPopups();
    });
  });

  const handleUpdateAvatar = (({ avatar }) => {
    api.changeAvatar(avatar).then(user => {
      setCurrentUser(user);
      closeAllPopups();
    });
  });

  useEffect(() => {
    api.getUserProfile().then(user => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards().then(cards => {
      setCards(cards);
    });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupWithForm name="new-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" id="card-name" name="name" className="popup__field" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__error card-name-error"></span>
          <input type="url" id="card-link" name="link" className="popup__field" placeholder="Ссылка на картинку" required />
          <span className="popup__error card-link-error"></span>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonText="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div >
    </CurrentUserContext.Provider>
  );
}
