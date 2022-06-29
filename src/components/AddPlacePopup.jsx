import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {

    const currentUser = React.useContext(CurrentUserContext);
    const nameRef = React.useRef()
    const placeRef = React.useRef()

    React.useEffect(() => {
        nameRef.current.value = '';
        placeRef.current.value = '';
    }, [currentUser])


    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({
            name: nameRef.current.value,
            link: placeRef.current.value,
        });
      }


    return (
    <PopupWithForm className="add" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText='Создать'>
        <input className="popup__input popup__input_type_place" ref={nameRef} id="name-card" type="text" name="name" placeholder="Название места" required />
        <span className="name-card-error popup__input-error"></span>
        <input className="popup__input popup__input_type_image" ref={placeRef} id="link" type="url" name="link"  placeholder="Ссылка на картинку" required />
        <span className="link-error popup__input-error"></span>
    </PopupWithForm>
    )
}

export default AddPlacePopup;