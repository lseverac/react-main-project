import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [{
            name : 'Laurent',
            age : 35
        }, {
            name : 'Amy',
            age : 34
        }]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons : [{
                name : newName,
                age : 35
            }, {
                name : 'Amy',
                age : 34
            }]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons : [{
                name : 'Laurent',
                age : 35
            }, {
                name : event.target.value,
                age : 34
            }]
        });
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font : 'inherit',
            border : '1px solid blue',
            padding : '8px',
            cursor : 'pointer'
        };

        return (
                <div className="App">
                    <h1>Hello World</h1>
                    <p>This is really working</p>
                    <button style={buttonStyle}
                            onClick={() => this.switchNameHandler('Laurent')}>Switch Name</button>
                    <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}/>
                    <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this, 'Lolo')}
                            nameChangedHandler={this.nameChangedHandler}>
                        My hobbies: handball</Person>
                </div>
        );
    }
}

export default App;