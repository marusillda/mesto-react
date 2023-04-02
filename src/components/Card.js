export default function Card({ card, onCardClick }) {
  return (
    <article className="element">
      <img className="element__photo" src={card.link} alt="Альтернативный текст" onClick={() => onCardClick(card)} />
      <button type="button" className="element__trash" aria-label="Кнопка Удалить карточку"></button>
      <div className="element__capture-like">
        <h2 className="element__capture">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-button" aria-label="Кнопка Поставить лайк"></button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}
