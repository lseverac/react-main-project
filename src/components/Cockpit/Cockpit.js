import React from 'react';

import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    const buttonStyle = {
        backgroundColor : 'green',
        color : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer'
    };

    if (props.showPersons) {
        buttonStyle.backgroundColor = 'red';
    }

    const paragraphClasses = [];
    if (props.numberOfPersons <= 2) {
        paragraphClasses.push(cssClasses.red);
    }
    if (props.numberOfPersons <= 1) {
        paragraphClasses.push(cssClasses.bold)
    }

    return (
            <div>
                <h1>Relevant People</h1>
                <p className={paragraphClasses.join(' ')}>This is really working</p>
                <button style={buttonStyle}
                        onClick={props.clicked}>Toggle
                </button>
            </div>
    );
};

export default cockpit;