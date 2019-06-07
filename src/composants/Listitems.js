import React, { Component } from "react";
import Item from "./Item";
import Videocurrent from "./Videocurrent";
import Videodetails from "./Videodetails";

class Listitems extends Component {
  state = {
    result: [],
    isLoad: true,
    videoUrl: " ",
    TitreVideo: " ",
    DescriptionVideo: " "
  };
  componentDidMount() {
    fetch("http://localhost:8000/api/films")
      .then(res => res.json())
      .then(data => this.setState({ result: data, isLoad: false }));
  }

  render() {
    const {
      result,
      isLoad,
      videoUrl,
      TitreVideo,
      DescriptionVideo
    } = this.state;

    const renderItem = !isLoad ? (
      result.data.map(item => {
        return (
          <div
            className="Video-item"
            key={item.id}
            onClick={() =>
              this.setState({
                videoUrl: item.url,
                TitreVideo: item.title,
                DescriptionVideo: item.description
              })
            }
            onLoad={() =>
              this.setState({
                videoUrl: result.data[0].url,
                TitreVideo: result.data[0].title,
                DescriptionVideo: result.data[0].description
              })
            }
          >
            <Item titre={item.title} image={item.image} />
          </div>
        );
      })
    ) : (
      <p>Chargement de données en cours...</p>
    );
    return (
      <div className="row">
        <div className="col-md-8">
          <Videocurrent VideoUrl={videoUrl} />
          <Videodetails titre={TitreVideo} description={DescriptionVideo} />
        </div>
        <div className="col-md-4">{renderItem} </div>
      </div>
    );
  }
}

export default Listitems;
