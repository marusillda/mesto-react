import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  };

  const handleEditAvatarClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="profile-name" name="name" className="popup__field" placeholder="Имя" required minLength="2" maxLength="40" />
        <span className="popup__error profile-name-error"></span>
        <input type="text" id="profile-about" name="about" className="popup__field" placeholder="Профессия" required minLength="2" maxLength="200" />
        <span className="popup__error profile-about-error"></span>
      </PopupWithForm>
      <PopupWithForm name="new-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="card-name" name="name" className="popup__field" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__error card-name-error"></span>
        <input type="url" id="card-link" name="link" className="popup__field" placeholder="Ссылка на картинку" required />
        <span className="popup__error card-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" id="avatar-link" name="link" className="popup__field" placeholder="Ссылка на картинку" required />
        <span className="popup__error avatar-link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div >
  );
}
