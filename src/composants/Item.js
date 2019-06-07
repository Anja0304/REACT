import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Item extends Component {
  render() {
    const { titre, image } = this.props; //Ici on met les props, qui sont titre et image et qu'on récup chez le composant parent, qu'on a créer là bas
    return (
      <div>
        <Container align="right">
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={image}
                alt="image"
                style={{ width: 150, height: 130 }}
                rounded
              />
            </Col>
            <Col xs={6} md={4} align="center">
              {titre}
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}
export default Item;
