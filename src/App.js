import React from 'react';
import logo from './bomb.svg';
import mine from './fired.svg';
import target from './target.svg'
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
            cells: Array.from(Array(72).keys()),
            bombs: Array.from({length: 10}, (_, i) => Math.floor(Math.random() * 72)),
            rightClick: [],
            increment: 0,
        };
    }

    cell(cell, right) {
        this.setState({
            clicked: cell === -1 ? this.state.clicked : [ ...this.state.clicked, cell],
            increment: this.state.increment + right,
            rightClick: right === 0 ? this.state.rightClick : [ ...this.state.rightClick, this.state.increment],
        })
        console.log("clicked:", this.state.clicked);
        console.log("right", this.state.rightClick, this.state.increment);
    }

    render() {
        //let rightClick = false;
        return <div className="Field" onContextMenu={(e) => {
            e.preventDefault(); this.cell(-1, 1)}
        }
            onClick={(e) => { console.log("text")}}>
            {
                this.state.cells.map(cell => {
                    console.log("increment", this.state.increment, this.state.rightClick);
                    if (this.state.rightClick.includes(this.state.increment)) {
                        return (<button className="Target-pic" key={cell}
                                        onClick={() => this.cell(cell, 0)
                                        }>
                        </button>)
                    }
                    else if (this.state.bombs.includes(cell) && this.state.clicked.includes(cell)) {
                        return (<button className="Mine-pic" key={cell}
                                        onClick={() => this.cell(cell, 0)}>
                            </button>)
                    }
                    else {
                        if (this.state.clicked.includes(cell)) {
                            console.log("jestem");
                            return (<button className="cellClicked" key={cell}
                                            onClick={() => this.cell(cell, 0)}>
                            </button>)
                        } else {
                            return (<button className="cellNotClicked" key={cell}
                                            onClick={() => this.cell(cell, 0)}>
                            </button>)
                        }
                    }
                })
            }
        </div>
    }
}

export default App;