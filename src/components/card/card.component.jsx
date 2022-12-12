import React from "react";

import "./card.style.css";

export const Card = props => {
    let x = 3;
    return(
        <div className="card-container">
            <img className="image" src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster" />
        <h2 >{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    );
};