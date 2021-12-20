import React from "react";
import './champ.component.css';

export const Champ = (props) => (
    <div className="champ-container">
        <img src={props.champion.pic}
             width="180px"
             height="180px"
             alt="Champion" />
        <h2>{props.champion.name}</h2>
        <p>{props.champion.nickName}</p>
    </div>
)