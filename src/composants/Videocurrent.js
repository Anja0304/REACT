/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

class Videocurrent extends Component {
  render() {
    const { VideoUrl } = this.props;
    return (
      <div>
        <iframe
          title=""
          width="1000"
          height="563"
          src={VideoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Videocurrent;
