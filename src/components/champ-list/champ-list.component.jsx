import React from "react";
import {Champ} from '../champ/champ.component';
import './champ-list.styles.css'


export const ChampList = props => (
    <div className="champ-list">
        {props.champions.map(champion =>(
        <Champ key={champion.id} champion={champion} />
        ))}
    </div>
);