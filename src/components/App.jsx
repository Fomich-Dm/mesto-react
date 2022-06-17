import React from 'react'; 
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  } 

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  } 

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main  onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm className="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} buttonText='Сохранить'>
          <input className="popup__input popup__input_type_name" id="name-profile" type="text" name="name" placeholder="Ваше имя" required />
          <span className="name-profile-error popup__input-error"></span>
          <input className="popup__input popup__input_type_about" id="name-profession" type="text" name="about"  placeholder="Ваша профессия"  required />
          <span className="name-profession-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm className="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} buttonText='Создать'>
          <input className="popup__input popup__input_type_place" id="name-card" type="text" name="name" placeholder="Название места" required />
          <span className="name-card-error popup__input-error"></span>
          <input className="popup__input popup__input_type_image" id="link" type="url" name="link"  placeholder="Ссылка на картинку" required />
          <span className="link-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm className="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} buttonText='Сохранить'>
          <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar"  placeholder="Аватар профиля" required />
          <span className="avatar-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm className="delete-image" title="Вы уверены?"></PopupWithForm>  
        <ImagePopup card={selectedCard} onClose={closeAllPopup}/>
      </div>
    </div>
  );
}

export default App;
