import React, { Component } from "react";

class Videodetails extends Component {
  render() {
    const { titre, description } = this.props;
    return (
      <div>
        <h4> {titre}</h4>
        <h6> {description}</h6>
      </div>
    );
  }
}

export default Videodetails;
