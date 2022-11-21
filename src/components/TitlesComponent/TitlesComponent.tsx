import React from "react";
import './TitlesComponent.css'


export function TitlesComponent() {
    return (
        <div>
            <div className={'titles'}>
                <div className={'mainTitle'}>Welcome to my Meteor Website!!</div>
                <div className={'secondTitle'}>First, Choose the year</div>
                <img alt='.' src={require('../../DCIM/MeteorImageMain.png')} width={225} height={225}/>
            </div>

        </div>
    );

}