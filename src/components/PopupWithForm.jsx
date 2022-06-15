import React from "react";

const PopupWithForm = ({name, title, isOpen, onClose, children}) => {
    return (
        <div className={`${isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}`}   >
          <div className="popup__content">
            <button className="popup__close" type="button" aria-label="закрыть попап" onClick={onClose} ></button>
            <form className={`popup__info popup__info_${name}`}    action="#" method="get" name="profile-popup">
              <h2 className="popup__title">{title}</h2>
              {children}
              <button className="popup__button popup__button_edit" aria-label="сохранить" >Сохранить</button>
            </form>
          </div>
        </div>
     )
}

export default PopupWithForm;
