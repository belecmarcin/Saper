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
                        <p className="flag">&#x1F4A3;</p>
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
    constructor(props) {
        super(props);
        this.state = {
            leftClicked: [],
            rightClicked: [],
            counter: 9,
            cells: Array.from(Array(72).keys()),
            bombs: Array.from({length: 10}, (_, i) => Math.floor(Math.random() * 72))
        };

        this.cell = this.cell.bind(this);
    }

    cell(cell, left) {
        this.setState({
            leftClicked: left ? [ ...this.state.leftClicked, cell] : this.state.leftClicked,
            rightClicked: left ? this.state.rightClicked : [ ...this.state.rightClicked, cell],
            counter: left ? this.state.counter : this.state.counter - 1
        });
        console.log(cell);
    }

    render() {
        return <div className="Field">
            {this.Click()}
        </div>
    }

    Click() {
       return this.state.cells.map(cell => this.state.leftClicked.includes(cell) && this.state.bombs.includes(cell) ?
                <button className="bomb" key={cell}
                        onClick={() => {this.cell(cell, true);}}>
                </button> : this.state.leftClicked.includes(cell) ?
                <button className="leftClick" key={cell}
                        onClick={() => {this.cell(cell, true);}}>
                </button> : this.state.rightClicked.includes(cell) ?
                <button className="rightClick" key={cell}
                        onContextMenu={(e) => {e.preventDefault(); this.cell(cell, false);}}>
                </button> :
                <button className="cell" key={cell}
                        onClick={() => {this.cell(cell, true);}}
                        onContextMenu={(e) => {e.preventDefault(); this.cell(cell, false); console.log(this.state.counter);
                                                this.state.counter >= 0 ? 
                                                    document.getElementsByClassName("flag-counter")[0].innerHTML = this.state.counter :
                                                    document.getElementsByClassName("flag-counter")[0].innerHTML = this.state.counter}}
                        >
                </button>)
    }
}

export default App;