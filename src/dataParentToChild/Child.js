import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataToParent: "",
    };
  }
  handleOnChange = (e) => {
    this.setState({ dataToParent: e.target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.dataFromChild(this.state.dataToParent);
    this.setState({ dataToParent: "" });
  };
  render() {
    const { passingData, disableTextBox } = this.props;
    return (
      <div className="child">
        <h2>Child Comp</h2>
        <p>{passingData}</p>
        <button onClick={disableTextBox}>Disable TextBox!</button>
        <form onSubmit={this.handleOnSubmit}>
          <h3>Passing Data to Parent</h3>
          <label htmlFor="dataToParent">Type data for Parent</label>
          <input
            type="text"
            id="dataToParent"
            name="dataToParent"
            value={this.state.dataToParent}
            onChange={this.handleOnChange}
          />
          <button type="submit">SendToParent</button>
        </form>
      </div>
    );
  }
}

export default Child;
