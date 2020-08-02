import React from 'react'
import './card.css'

const Card = ({ imageUrl, name, category, desc, label, price }) => {
    return (
        <div className="card">
            <div className="card_image">
                <img src={imageUrl} style={{ height: 300 + 'px', width: 100 + "%" }} />
            </div>
            <div className="card_text">
                <div className="card_title">{name}</div>
                <h4><b>Category: </b> {category}</h4>
                <p>{desc}</p><br />
                <b>Price: </b>{price}
                <div className=".item_label">label:<b>{label?'#'+label:"No Label"}</b></div>
            </div>
        </div>
    )
}

export default Card