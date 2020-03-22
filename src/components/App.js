import React, { Component } from 'react';
import List from './List';

class App extends Component {
    render() {
        return (
            <div>
                <h2>App Component</h2>
                <List title="List 1" />                 
            </div>
        )
    }
}

export default App;
