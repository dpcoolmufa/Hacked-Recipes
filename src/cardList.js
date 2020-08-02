import React from 'react'
import Card from './card'
import "./card.css"

const CardList = ({ recipes }) => {
    console.log(recipes)
    const cardComponent = recipes.map((recipe, itr) => {
        return (
            <li key={itr} id={recipes[itr].id} className="cards_item">
                <Card key={itr} id={recipes[itr].id} price={recipes[itr].price} label={recipes[itr].label} imageUrl={recipes[itr].image} name={recipes[itr].name} category={recipes[itr].category} desc={recipes[itr].description} />
            </li>

        )
    })
    return (
        <div>
        <div className="main">
            <h1>Your Favourite  recipes!!</h1>
        <ul className="cards">
            {cardComponent}
        </ul>
        </div>
        </div>
        )

}
export default CardList