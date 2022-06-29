import React from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";


const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {

    const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = React.useRef()

    useEffect(() => {
        avatarRef.current.value = '';
    }, [currentUser]) 

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }



    return(
    <PopupWithForm className="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText='Сохранить'>
        <input className="popup__input popup__input_type_avatar" ref={avatarRef} id="avatar" type="url" name="avatar"  placeholder="Аватар профиля" required />
        <span className="avatar-error popup__input-error"></span>
    </PopupWithForm>
    )
}

export default EditAvatarPopup;