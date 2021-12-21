import axios from "axios";
import React from "react";



export default class NullQtyProducts extends React.Component {
    state = {
        productsList: [],
        noQtyProducts: [],

        nameShirt:'',
        priceShirt:'',
        quantityShirt:'',

        namePants: '',
        pricePants:'',
        quantityPants: '',

        nameJacket: '',
        priceJacket:'',
        quantityJacket: '',

        nameToy: '',
        priceToy:'',
        quantityToy: '',
        
    };

    qtyChangeShirt = event => {
        this.setState({ nameShirt:'Shirt' });
        this.setState({ priceShirt: 2  });
        this.setState({ quantityShirt: event.target.value });
    };
    qtyChangePants = event => {
        this.setState({ namePants:'Pants' });
        this.setState({ pricePants: 3  });
        this.setState({ quantityPants: event.target.value });
    };
    qtyChangeJacket = event => {
        this.setState({ nameJacket:'Jacket' });
        this.setState({ priceJacket: 4  });
        this.setState({ quantityJacket: event.target.value });
    };
    qtyChangeToy = event => {
        this.setState({ nameToy:'Toy' });
        this.setState({ priceToy: 1  });
        this.setState({ quantityToy: event.target.value });
    };

    handleSubmitShirt = event => {
        // do not load page
        event.preventDefault();

        const productsShirt = {
            name: this.state.nameShirt,
            price: this.state.priceShirt,
            quantity: this.state.quantityShirt,
        }
        const productsPants = {
            name: this.state.namePants,
            price: this.state.pricePants,
            quantity: this.state.quantityPants,
        }
        const productsJacket = {
            name: this.state.nameJacket,
            price: this.state.priceJacket,
            quantity: this.state.quantityJacket,
        }
        const productsToy = {
            name: this.state.nameToy,
            price: this.state.priceToy,
            quantity: this.state.quantityToy,
        }
        axios.put("https://localhost:5001/products/7",productsShirt )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
                 console.log('tere');
             });
             axios.put("https://localhost:5001/products/8",productsPants )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
                 console.log('tere');
             });
             axios.put("https://localhost:5001/products/9",productsJacket )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
                 console.log('tere');
             });
             axios.put("https://localhost:5001/products/10",productsToy )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
                 console.log('tere');
             });
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
            
            <ul>
            
                {/*kuva ainult ilma koguseta elemendid
                
                {this.state.productsList.filter(productsList => productsList.quantity < 1).map(product =>
                <li key={product.name}>{product.name} {product.quantity}</li>)} */} 

                <form onSubmit={this.handleSubmitShirt}>
                <p>Insert quantities of these products to start the day!</p>
                <li>Shirt: <input type="text" key="shirt" name="shirt" onChange={this.qtyChangeShirt}/></li>
                <li>Pants: <input type="text" key="pants" name="pants" onChange={this.qtyChangePants}/></li>
                <li>Jacket: <input type="text" key="jacket" name="jacket" onChange={this.qtyChangeJacket}/></li>
                <li>Toy: <input type="text" key="toy" name="toy" onChange={this.qtyChangeToy}/> </li>
                <button type="submit">Add</button>
                </form>  
            </ul>
        )
    }
}