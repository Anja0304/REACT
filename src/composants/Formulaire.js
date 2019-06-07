import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Formulaire extends Component {
  state = {
    title: " ",
    description: " ",

    image: " ",
    url: " "
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value //recupère les noms et associe les à leur valeur et selon le state
    });
  };

  handleSubmit = event => {
    event.preventDefault(); //permet de ne pas rafraîchir la page quand on submit
    console.log("Film ajouté : " + JSON.stringify(this.state));
    const { title, description, image, url } = this.state;

    fetch("http://localhost:8000/api/film", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,

        image: image,
        url: url
      })
    })
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

  render() {
    const { title, description, image, url } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="Titre">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            name="title"
            value={title}
            onChange={this.handleChange}
            type="text"
            placeholder="Entrer un titre"
          />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={description}
            onChange={this.handleChange}
            type="text"
            placeholder="Entrez la description "
          />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            value={image}
            onChange={this.handleChange}
            type="text"
            placeholder="Insérer une image"
          />
        </Form.Group>

        <Form.Group controlId="Url">
          <Form.Label>Url</Form.Label>
          <Form.Control
            name="url"
            value={url}
            onChange={this.handleChange}
            type="text"
            placeholder="Entrez l'url "
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    );
  }
}
export default Formulaire;
