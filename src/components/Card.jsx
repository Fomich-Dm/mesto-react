const Card = ({card, onCardClick}) => {

    function handleClick() {
        onCardClick(card)
    }

    return(
        <div className='cards__item'>
            <img className="cards__image" alt="Фото загружно места" src={card.link} onClick={handleClick}/>
            <button className="cards__delete" type="button" aria-label="удалить место"/>
            <div className="cards__info">
              <h2 className="cards__name">{card.name}</h2>
              <div>
                <button className="cards__like" type="button" aria-label="Поставить лайк"></button>
                <p className="cards__number-of-likes">{card.likes.length}</p>
              </div>
            </div>
          </div>
    )
} 

export default Card;