import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          <div className="profile__profile-info">
            <div className="profile__name-editing">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button selectable-white"
                aria-label="Кнопка редактирования профиля"></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button selectable-white"
          aria-label="Кнопка добавления карточек мест"></button>
      </section>
      <section className="elements" aria-label="Фотографии мест">
        {props.cards.map(card => (<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>))}
      </section>
    </main>
  )
}
