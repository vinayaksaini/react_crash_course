import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        }
    }
    //end constructor

    //addItem
    addItem(todoValue) {
        const newItem = {
            id: Date.now(),
            value: todoValue,
            isDone: false
        };
        const list = [...this.state.list];
        list.push(newItem);

        this.isState({
            list,
            newItem: ""
        });
    }
    //end addItem

    //deleteItem
    deleteItem(id) {

        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({ list: updatedlist });

    }
    //end deleteItem

    //updateItem
    updateItem(input) {
        this.setState({ newItem: input });
    }
    //end UpdateItem

    //renderPart
    render() {
        return (
            <div>
                <img src={logo}
                    width="100"
                    height="100"
                    alt=""
                    className="logo" />
                <h1 className="app-title">VS-App</h1>
                <div className="container">
                    Add an Item...
                    <br />
                    <input type="text"
                        className="input-text"
                        id=""
                        placeholder="enter the things here!"
                        required
                        value={this.state.newItem}
                        onChange={e => this.updateInput(e.target.value)} />

                    <button className="add-btn"
                        onClick={() => this.addItem(this.state.newItem)}
                        disabled={!this.state.newItem.length}>
                        Add
                    </button>
                    <div className="list">
                        <ul>
                            <li>
                                {this.state.list.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <input type="checkbox" name="isDone" id="" checked={item.isDone} onChange={() => { }} />
                                            {item.value}
                                            <button className="btn" onClick={() => this.deleteItem(item.id)} >Delete</button>
                                        </li>
                                    );
                                })}

                                {/* <input type="checkbox" name="" id="" />
                                Do Something
                                <button className="btn">Delete</button> */}
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
        );
    }


}

export default App;
// import React from 'react';
// import logo from './logo.svg'
// import "./App.css"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="" />
//         <p>lets do some amazing stuff!!!!</p>
//         <p>Its Reaxt Time</p>
//       </header>
//     </div>
//   );
// }

// export default App;