import React, { Component } from "react";

export default class FloatingLabelInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
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
      <div className={"input floating-label " + (this.state.value && "has-value")}>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        ></input>
        <label htmlFor={this.props.id} data-content={this.props.label}></label>
      </div>
    );
  }
}
