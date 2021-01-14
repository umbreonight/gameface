import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ""
    };

    this.handleChange = (event) => {
      const { value } = event.target;
      this.setState(() => {
        return {
          value
        };
      });
    };
  }

  render() {
    return (
      <div className="input">
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <label htmlFor={this.props.id} data-content={this.props.label}></label>
      </div>
    );
  }
}
