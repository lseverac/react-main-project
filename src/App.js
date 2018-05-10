import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [{
            id : 51,
            name : 'Laurent',
            age : 35
        }, {
            id : 52,
            name : 'Amy',
            age : 34
        }, {
            id : 53,
            name : 'Francis',
            age : 67
        }],
        showPersons : false
    }

    nameChangedHandler = (event, id) => {
        const personIdx = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIdx]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIdx] = person;

        this.setState({
            persons : persons
        });
    }

    togglePersonHandler = () => {
        const show = this.state.showPersons;
        this.setState({
            showPersons : !show
        });
    }

    deletePersonHandler = (personIdx) => {
        const persons = [...this.state.persons];
        persons.splice(personIdx, 1);
        this.setState({
            persons : persons
        })
    }

    render() {
        const buttonStyle = {
            backgroundColor : 'green',
            color : 'white',
            font : 'inherit',
            border : '1px solid blue',
            padding : '8px',
            cursor : 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            buttonStyle.backgroundColor = 'red';

            persons = (
                    <div>
                        {this.state.persons.map((person, idx) => {
                            return <Person
                                    key={person.id}
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.deletePersonHandler(idx)}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        })}
                    </div>
            );
        }

        const paragraphClasses = [];
        if (this.state.persons.length <= 2) {
            paragraphClasses.push('red');
        }
        if (this.state.persons.length <= 1) {
            paragraphClasses.push('bold')
        }

        return (
                <div className="App">
                    <h1>Hello World</h1>
                    <p className={paragraphClasses.join(' ')}>This is really working</p>
                    <button style={buttonStyle}
                            onClick={this.togglePersonHandler}>Toggle
                    </button>
                    {persons}
                </div>
        );
    }
}

export default App;