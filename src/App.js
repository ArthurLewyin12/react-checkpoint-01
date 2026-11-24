import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Button, Badge } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

// Leave it empty ("") to see the "Hello, there!" message
const firstName = "Cedric";

function App() {
  return (
    <div className="App">
      <h1 className="shop-title">Today's deal</h1>

      <Card className="product-card">
        <div className="image-wrapper">
          <Image />
          <Badge bg="danger" className="new-badge">
            New
          </Badge>
        </div>
        <Card.Body>
          <Card.Title as="div">
            <Name />
          </Card.Title>
          <Card.Text as="div">
            <Description />
          </Card.Text>
          <div className="card-footer-row">
            <Price />
            <Button className="buy-button">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>

      <div className="greeting">
        {firstName && <img className="greeting-image" src="/images/welcome.svg" alt="Smiley face" />}
        <p>Hello, {firstName ? firstName : "there!"}</p>
      </div>
    </div>
  );
}

export default App;
