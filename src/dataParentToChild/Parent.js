import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passingData: "",
      disableTextBox: false,
      childData: [],
    };
  }

  handleOnChange = (e) => {
    this.setState({
      passingData: e.target.value,
    });
  };

  disableTextBox = () => {
    this.setState({
      disableTextBox: !this.state.disableTextBox,
    });
  };

  dataFromChild = (data) => {
    this.setState(
      {
        childData: [...this.state.childData, data],
      },
      () => {
        console.log(this.state.childData);
      }
    );
  };

  renderChildData = () => {
    this.state.childData.map((data, i) => {
      return <li key={i}>{data}</li>;
    });
  };
  render() {
    const { passingData } = this.state;
    return (
      <div>
        <div className="parent">
          <h2>Parent Comp</h2>
          <br />
          <label htmlFor="passingData">Enter Data to pass to child</label>
          <input
            id="passingData"
            type="text"
            name="passingData"
            value={passingData}
            onChange={this.handleOnChange}
            disabled={this.state.disableTextBox}
          />
        </div>
        <div className="data-from-child">
          <h3>Data From Child</h3>
          {this.state.childData.map((data, i) => {
            return <p key={i}>{data}</p>;
          })}
        </div>
        <Child
          passingData={passingData}
          disableTextBox={this.disableTextBox}
          dataFromChild={this.dataFromChild}
        />
      </div>
    );
  }
}

export default Parent;
