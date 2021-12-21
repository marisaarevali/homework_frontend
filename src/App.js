import React, { Component } from 'react';
import PosProducts from './Components/PosProducts';
import NullQtyProducts from './Components/NullQtyProducts';
import Checkout from './Components/Checkout';
import Inventory from './Components/Inventory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> welcome </h1>
        </header>
        <NullQtyProducts />
        <PosProducts />
        <Checkout />

        <Inventory />
      </div>
      
    )
  }
}

export default App