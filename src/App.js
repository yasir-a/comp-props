import React, { Component } from "react";
import Parent from "./dataParentToChild/Parent";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="data-parent-child">
          <h3>Passing Data between Parent and Child</h3>
          <ul>
            <li>Passing data to child</li>
            <li>Passing function to child</li>
            <li>Passing data to Parent from child</li>
          </ul>
          <Parent />
        </div>
      </div>
    );
  }
}

export default App;
