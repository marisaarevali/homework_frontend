import React from "react";
import './App.css';


class Start extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            products: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(`https://localhost:5001/products`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, products } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;


        console.log(products);
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                products.map((item) => ( 
                <ol key = { item.id } >
                    prodName: { item.name }, 
                    price: { item.price }, 
                    quantity: { item.quantity } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default Start;