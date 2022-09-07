import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import './styleSaludo.css';

const Saludo = () => {

  return (
    <>
      <h1>Este es el componente Saludo</h1>;
        <Row>
          <Col>
            <Button variant="success ">Primary</Button>
          </Col>
          </Row>
      
      <Button variant="warning">Boton Saludo</Button>
    </>
  );
};

export default Saludo;
