import React from "react";

const ImagePopup = ({card, onClose}) => {

    return(
        <div className={`popup popup_image ${ card._id ? 'popup_opened' : ''}`}>
          <div className="popup__content-img">
            <button className="popup__close popup__close_image" onClick={onClose} type="button" aria-label="закрыть попап"></button>
            <img className="popup__img" alt={card.name} src={card.link}/>
            <h2 className="popup__title-place">{card.name}</h2>
          </div>
        </div>
    )
}

export default ImagePopup;