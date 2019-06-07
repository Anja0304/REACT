import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Videocurrent from "./Videocurrent";

class ModalVideo extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", this.state);
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.onOpenModal}>Ajouter film</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Videocurrent />
        </Modal>
      </div>
    );
  }
}
export default ModalVideo;
