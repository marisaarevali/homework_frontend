import React, { Component } from 'react';
import PosProducts from './Components/PosProducts';
import NullQtyProducts from './Components/NullQtyProducts';
import Checkout from './Components/Checkout';
import Inventory from './Components/Inventory';
import {Container,Row,Col} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Container>
          <Row className="justify-content-md-center">
            <Col></Col>
            <Col xs={6}><header className="text-center">
              <h1 className="App-title" > Charity Sale </h1>
            </header></Col>
            <Col></Col>
          </Row>
        
          <Row className="justify-content-md-center">
            <Col><PosProducts /></Col>
          
          </Row>
          <Row>
          <NullQtyProducts />
          </Row>
          <Checkout />

          <Inventory />
          </Container>
      </div>
      
    )
  }
}

export default App