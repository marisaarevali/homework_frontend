import React from "react";
import axios from "axios";


export default class Inventory extends React.Component {
    state = {
        productsList: [],
        
    };

    componentDidMount() {
        axios.get('https://localhost:5001/products').then(res => {
            // console.log(res);
            this.setState({ productsList: res.data });
            //console.log(this.state.productsList);    
        });
    };

    
    
    render() {
        return(
            <div>

            <h3>Inventory:</h3>

            <ul>            
            { this.state.productsList.map(product =>
            <li key={product.id}>{product.name} {product.quantity}</li>) }  

            </ul>
            </div>
        )
    }
}