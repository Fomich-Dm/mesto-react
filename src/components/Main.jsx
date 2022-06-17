import React from "react";
import {useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    api.getUserInfo().then(date => {
      setUserName(date.name)
      setUserDescription(date.about)
      setUserAvatar(date.avatar)
    }).catch((err) => {
      console.log(err);
    })
    api.getAllCards().then(date => {
      setCards(date)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return(
    <main className='content'>
      <section className="profile">
        <img className="profile__avatar" alt="Аватар" src={userAvatar}/>
        <button className="profile__avatar-button" onClick={onEditAvatar} type="button"></button>
        <div className="profile__info">
          <div className="profile__names">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Изменить профиль"></button>
          </div>
          <p className="profile__about-me">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить контент"></button>
      </section>

      <section className='cards'>
        {cards.map((card, i) => <Card  key={card._id} card={card} onCardClick={onCardClick}/>)}
      </section>
    </main>
)
}

export default Main;
