import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserProfile().then(profile => {
      setUserName(profile.name);
      setUserDescription(profile.about);
      setUserAvatar(profile.avatar);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards().then(cards => {
      setCards(cards);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__profile-info">
            <div className="profile__name-editing">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button selectable-white"
                aria-label="Кнопка редактирования профиля"></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button selectable-white"
          aria-label="Кнопка добавления карточек мест"></button>
      </section>
      <section className="elements" aria-label="Фотографии мест">
        {cards.map(card => (<Card card={card} onCardClick={props.onCardClick}/>))}
      </section>
    </main>
  )
}
