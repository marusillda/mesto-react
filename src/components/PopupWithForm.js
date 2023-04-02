export default function PopupWithForm(props) {
 const isOpen = props.isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup popup_type_${props.name} ${isOpen}`} >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button type="submit" className="popup__submit-button selectable-black"
            aria-label={`Кнопка ${props.buttonText}`}>{props.buttonText}</button>
        </form>
        <button onClick={props.onClose} type="button" className="popup__close-button selectable-white"
          aria-label="Кнопка закрытия окна"></button>
      </div>
    </div>
  )
}
