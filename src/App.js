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
        //Initial state
        this.state = {
            clicked: [],
            cells: Array.from(Array(72).keys())
        };

        this.cell = this.cell.bind(this);
    }

    cell(cell) {
        this.setState({
            clicked: [ ...this.state.clicked, cell]
        });
        console.log(this.state.clicked);
    }

    render() {

        return <div className="Field">
            {this.state.cells.map(cell => this.state.clicked.includes(cell) ?
                <button className="cellClicked" key={cell}
                        onClick={() => this.cell(cell)}>
                </button> :
                <button className="cellNotClicked" key={cell}
                onClick={() => this.cell(cell)}>
                </button>)
            }

        </div>
    }
}

export default App;
