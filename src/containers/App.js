import React, {Component} from 'react';
import cssClasses from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                    <Persons
                            Person
                            persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.nameChangedHandler}/>
            );
        }

        return (
                <div className={cssClasses.App}>
                    <Cockpit
                            numberOfPersons={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            clicked={this.togglePersonHandler}/>
                    {persons}
                </div>
        );
    }
}

export default App;