import axios from "axios";
import React from "react";



export default class PosProducts extends React.Component {


    state = {
        productsList: [],
        controller: 0,
        subtotal: isNaN(parseFloat(localStorage.getItem('subtotal')))  ? (0) : (parseFloat(localStorage.getItem('subtotal'))),
        //products in cart
        cakePop: {
            count:  isNaN(parseInt(localStorage.getItem('cakepop-count')))  ? (0) : (parseInt(localStorage.getItem('cakepop-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('cakepop-price')))  ? (0) : (parseFloat(localStorage.getItem('cakepop-price')))},
        appleTart: {
            count:  isNaN(parseInt(localStorage.getItem('appleTart-count')))  ? (0) : (parseInt(localStorage.getItem('appleTart-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('appleTart-price')))  ? (0) : (parseFloat(localStorage.getItem('appleTart-price')))},
        muffin: {
            count:  isNaN(parseInt(localStorage.getItem('muffin-count')))  ? (0) : (parseInt(localStorage.getItem('muffin-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('muffin-price')))  ? (0) : (parseFloat(localStorage.getItem('muffin-price')))},
        brownie: {
            count:  isNaN(parseInt(localStorage.getItem('brownie-count')))  ? (0) : (parseInt(localStorage.getItem('brownie-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('brownie-price')))  ? (0) : (parseFloat(localStorage.getItem('brownie-price')))},
        water: {
            count:  isNaN(parseInt(localStorage.getItem('water-count')))  ? (0) : (parseInt(localStorage.getItem('water-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('water-price')))  ? (0) : (parseFloat(localStorage.getItem('water-price')))},
        pants: {
            count:  isNaN(parseInt(localStorage.getItem('pants-count')))  ? (0) : (parseInt(localStorage.getItem('pants-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('pants-price')))  ? (0) : (parseFloat(localStorage.getItem('pants-price')))},
        toy: {
            count:  isNaN(parseInt(localStorage.getItem('toy-count')))  ? (0) : (parseInt(localStorage.getItem('toy-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('toy-price')))  ? (0) : (parseFloat(localStorage.getItem('toy-price')))},
        shirt: {
            count:  isNaN(parseInt(localStorage.getItem('shirt-count')))  ? (0) : (parseInt(localStorage.getItem('shirt-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('shirt-price')))  ? (0) : (parseFloat(localStorage.getItem('shirt-price')))},
        jacket: {
            count:  isNaN(parseInt(localStorage.getItem('jacket-count')))  ? (0) : (parseInt(localStorage.getItem('jacket-count'))),
            price:  isNaN(parseFloat(localStorage.getItem('jacket-price')))  ? (0) : (parseFloat(localStorage.getItem('jacket-price')))}, 
    };

    
    componentDidMount() {
        axios.get('https://localhost:5001/products').then(res => {
            //console.log(res.data.name);
            this.setState({ productsList: res.data });
        });
    };

    
    productAdd(name) {
        if (name === 'Cake Pop' && this.state.controller === 0 ){  
            this.setState({controller: 1})
            this.setState(prevState => ({
                cakePop: {                   // object that we want to update
                    ...prevState.cakePop,    // keep all other key-value pairs, not needed right now 
                    count: this.state.cakePop.count + 1,// update the value of specific key
                    price: this.state.cakePop.price+ 1.35
                }
            }))
            this.setState({subtotal: this.state.subtotal + 1.35 })
            localStorage.setItem('cakepop-count', this.state.cakePop.count)
            localStorage.setItem('cakepop-price', this.state.cakePop.price)
            localStorage.setItem('subtotal', this.state.subtotal)

            console.log('blah')
            console.log(this.state.cakePop.count)
            console.log(this.state.cakePop.price)

            this.setState({controller: 0})
            
        }

        if (name === 'Apple tart'){
            this.setState(prevState => ({
                appleTart: {                   // object that we want to update
                    ...prevState.appleTart,    // keep all other key-value pairs, not needed right now 
                    count: this.state.appleTart.count + 1,// update the value of specific key
                    price: this.state.appleTart.price + 1.5
                }
            }))
            localStorage.setItem('appletart-count', this.state.appleTart.count)
            localStorage.setItem('appletart-price', this.state.appleTart.price)
            this.setState({subtotal: this.state.subtotal + 1.5 })
            console.log(this.state.appleTart.count)
            console.log(this.state.appleTart.price)
            localStorage.setItem('subtotal', this.state.subtotal)
        }

        if (name === 'Muffin'){
            this.setState(prevState => ({
                muffin: {                   // object that we want to update
                    ...prevState.muffin,    // keep all other key-value pairs, not needed right now 
                    count: this.state.muffin.count + 1,// update the value of specific key
                    price: this.state.muffin.price + 1
                }
            }))
            localStorage.setItem('muffin-count', this.state.muffin.count)
            localStorage.setItem('muffin-price', this.state.muffin.price)
            this.setState({subtotal: this.state.subtotal + 1 })
            localStorage.setItem('subtotal', this.state.subtotal)
        }

        if (name === 'Brownie'){
            this.setState(prevState => ({
                brownie: {                   // object that we want to update
                    ...prevState.brownie,    // keep all other key-value pairs, not needed right now 
                    count: this.state.brownie.count + 1,// update the value of specific key
                    price: this.state.brownie.price + 0.65
                }
            }))
            localStorage.setItem('brownie-count', this.state.brownie.count)
            localStorage.setItem('brownie-price', this.state.brownie.price)
            this.setState({subtotal: this.state.subtotal + 0.65 })
            localStorage.setItem('subtotal', this.state.subtotal)
        }

        if (name === 'Water'){
            this.setState(prevState => ({
                water: {                   // object that we want to update
                    ...prevState.water,    // keep all other key-value pairs, not needed right now 
                    count: this.state.water.count + 1,// update the value of specific key
                    price: this.state.water.price + 1.5
                }
            }))
            localStorage.setItem('water-count', this.state.water.count)
            localStorage.setItem('water-price', this.state.water.price)
            this.setState({subtotal: this.state.subtotal + 1.5 })
            localStorage.setItem('subtotal', this.state.subtotal)
        }

        if (name === 'Pants'){
            this.setState(prevState => ({
                pants: {                   // object that we want to update
                    ...prevState.pants,    // keep all other key-value pairs, not needed right now 
                    count: this.state.pants.count + 1,// update the value of specific key
                    price: this.state.pants.price + 3
                }
            }))
            localStorage.setItem('pants-count', this.state.pants.count)
            localStorage.setItem('pants-price', this.state.pants.price)
            this.setState({subtotal: this.state.subtotal + 3 })
            localStorage.setItem('subtotal', this.state.subtotal)
        }

        if (name === 'Toy'){
            this.setState(prevState => ({
                toy: {                   // object that we want to update
                    ...prevState.toy,    // keep all other key-value pairs, not needed right now 
                    count: this.state.toy.count + 1,// update the value of specific key
                    price: this.state.toy.price + 1
                }
            }))
            localStorage.setItem('toy-count', this.state.toy.count)
            localStorage.setItem('toy-price', this.state.toy.price)
            this.setState({subtotal: this.state.subtotal + 1 })
            localStorage.setItem('subtotal', this.state.subtotal)

        }
        
        if (name === 'Shirt'){
            this.setState(prevState => ({
                shirt: {                   // object that we want to update
                    ...prevState.shirt,    // keep all other key-value pairs, not needed right now 
                    count: this.state.shirt.count + 1,// update the value of specific key
                    price: this.state.shirt.price + 2
                }
            }))
            localStorage.setItem('shirt-count', this.state.shirt.count)
            localStorage.setItem('shirt-price', this.state.shirt.price)
            this.setState({subtotal: this.state.subtotal + 2 })
            localStorage.setItem('subtotal', this.state.subtotal)
        }
        
        if (name === 'Jacket'){
            this.setState(prevState => ({
                jacket: {                   // object that we want to update
                    ...prevState.jacket,    // keep all other key-value pairs, not needed right now 
                    count: this.state.jacket.count + 1,// update the value of specific key
                    price: this.state.jacket.price + 4
                }
            }))
            localStorage.setItem('jacket-count', this.state.jacket.count)
            localStorage.setItem('jacket-price', this.state.jacket.price)
            this.setState({subtotal: this.state.subtotal + 4})
            console.log(this.state.subtotal)
            localStorage.setItem('subtotal', this.state.subtotal)
        }
        else {
            
            //button up
        }
        /* if (name === 'Cake Pop'){
            this.setState({countCakePop: this.state.countCakePop +1})
            console.log(this.state.countCakePop);
        } */
    };

    

    render() {
        return(
            <div>
            <ul>
            {this.state.productsList.map(product =>
            <li key={product.name}><button onClick={() => this.productAdd(product.name)}>{product.name} </button></li>)}
            </ul>
            <h1>Shopping Cart</h1>
            
            {/* If there is none in cart do nothing ? if there is show count and row total price */}

            {this.state.cakePop.count === 0 ? (''):(this.state.cakePop.count + ' Cake Pop '+ this.state.cakePop.price)}
            {this.state.appleTart.count === 0 ? (''):(this.state.appleTart.count + ' Apple Tart '+ this.state.appleTart.price)}
            {this.state.muffin.count === 0 ? (''):(this.state.muffin.count + ' Muffin '+ this.state.muffin.price)}
            {this.state.brownie.count === 0 ? (''):(this.state.brownie.count + ' Brownie '+ this.state.brownie.price)}
            {this.state.water.count === 0 ? (''):(this.state.water.count + ' Water '+ this.state.water.price)}
            {this.state.pants.count === 0 ? (''):(this.state.pants.count + ' Pants '+ this.state.pants.price)}
            {this.state.toy.count === 0 ? (''):(this.state.toy.count + ' Toy '+ this.state.toy.price)}
            {this.state.shirt.count === 0 ? (''):(this.state.shirt.count + ' Shirt '+ this.state.shirt.price)}
            {this.state.jacket.count === 0 ? (''):(this.state.jacket.count + ' Jacket '+ this.state.jacket.price)}

            <p>Subtotal:{this.state.subtotal}</p>

            </div>

)
  
    }
}