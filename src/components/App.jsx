import React, { useEffect } from 'react'; 
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvaterPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  useEffect(() =>{
    api.getUserInfo().then(date =>{
      setCurrentUser(date)
    }).catch((err) => {
      console.log(err);
    })
    api.getAllCards().then(date => {
      setCards(date)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if(isLiked) {
      api.deleteLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    } else {
      api.putLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) =>
        state.filter((c) => c._id !== card._id
        ));
    })
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data).then(date => {
      setCurrentUser(date)
      closeAllPopup()
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(data) {
    api.editUserAvatar(data).then(date => {
      setCurrentUser(date)
      closeAllPopup()
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleAddPlaceSubmit(data) {
    api.addNewPlace(data).then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopup();
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__container">
            <Header />
            <Main  cards={cards} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} onAddPlace={handleAddPlaceSubmit}/>
            <EditAvatarPopup  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} onUpdateAvatar={handleUpdateAvatar}/>
            <PopupWithForm className="delete-image" title="Вы уверены?"></PopupWithForm>  
            <ImagePopup card={selectedCard} onClose={closeAllPopup}/>
          </div>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
