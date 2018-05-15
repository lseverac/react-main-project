import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {
    return (
            <div className={cssClasses.Person}>
                <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
                <br/>
            </div>
    );
};

export default person;