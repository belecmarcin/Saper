import React from 'react';
import logo from './bomb.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Minesweeper">
                    <div className="Name">
                        <p>Minesweeper</p>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="controlPanel">
                        <p className="flag-counter">10</p>
                        <img className="flag" src="https://images.emojiterra.com/mozilla/512px/1f4a3.png" alt="flag counter"/>
                        <a href="#">
                            <img className="reset"
                                 src="https://cdn2.iconfinder.com/data/icons/basic-ui-elements-round/700/012_restart-2-512.png"
                                 alt="reset"/></a>
                        <p className="counter">0:00</p>
                    </div>
                    <Field/>
                </div>
            </header>
        </div>
    );
}
class Field extends React.Component {
    render() {
        let cells = Array.from(Array(72).keys());
        let cellDiv = cells.map(cell => <button className="cell" key={cell}> </button>);
        return <div className="Field">
            {cellDiv}
        </div>
    }
}

export default App;
