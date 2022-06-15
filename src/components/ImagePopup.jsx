import React from "react";

const ImagePopup = ({card, onClose}) => {

    return(
        <div className={`${card ? `popup popup_image popup_opened` : `popup popup_image`}`}>
          <div className="popup__content-img">
            <button className="popup__close popup__close_image" onClick={onClose} type="button" aria-label="закрыть попап"></button>
            <img className="popup__img" alt="Место" src={card.link}/>
            <h2 className="popup__title-place">{card.name}</h2>
          </div>
        </div>
    )
}

export default ImagePopup;