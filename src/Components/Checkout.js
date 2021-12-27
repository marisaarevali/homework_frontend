//import React from "react";
import axios from "axios";
import {Button, Modal, Form} from 'react-bootstrap';
import PosProducts from "./PosProducts";
import React, { useState } from 'react';


export default class Checkout extends React.Component {
    state = {
        //show checkout modal
        showProceedToCheckOut: false,
        //show payment modal
        showPaymentOk: false,
        productsList: [],
        namesList: [],
        //check if there is input
        inputController: 0,
        //money received from client
        money:0,
        //change to give back to client
        change:0,
        //subtotal price of items in cart
        subtotal: Number(localStorage.getItem('subtotal')),
        


        cakePop: {
            name: 0,
            price: 0,
            quantity:0 
        },
        appleTart: {
            name: 0,
            price: 0,
            quantity:0 
        },
        muffin: {
            name: 0,
            price: 0,
            quantity:0 
        },
        brownie: {
            name: 0,
            price: 0,
            quantity:0 
        },
        water: {
            name: 0,
            price: 0,
            quantity:0 
        },
        pants: {
            name: 0,
            price: 0,
            quantity:0 
        },
        toy: {
            name: 0,
            price: 0,
            quantity:0 
        },  
        shirt: {
            name: 0,
            price:0,
            quantity:0 
        },
        jacket: {
            name: 0,
            price: 0,
            quantity:0 
        }, 

        countCartProducts: {
            cakePop:  0,
            appleTart: 0,
            muffin: 0,
            brownie:  0,
            water: 0,
            pants: 0,
            toy:0,
            shirt: 0,
            jacket: 0,
        }
    };

    componentDidMount() {
        axios.get('https://localhost:5001/products').then(res => {
            this.setState({ productsList: res.data });

            this.state.productsList.filter(productsList => productsList.id === 2).map( (product) => {
                this.setState({
                    brownie: {                   
                        name: product.name, 
                        price: product.price,
                        quantity: product.quantity - this.state.countCartProducts.brownie,
                    }
                })
                return(console.log(this.state.brownie))
            })

            this.state.productsList.filter(productsList => productsList.id === 3).map( (product) => {
                this.setState({
                    muffin: {                   
                        name: product.name,  
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.muffin))
            })

            this.state.productsList.filter(productsList => productsList.id === 4).map( (product) => {
                this.setState({
                    cakePop: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.cakePop))
            })

            this.state.productsList.filter(productsList => productsList.id === 5).map( (product) => {
                this.setState({
                    appleTart: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.appleTart))
            })
            this.state.productsList.filter(productsList => productsList.id === 6).map( (product) => {
                this.setState({
                    water: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.water))
            })
            this.state.productsList.filter(productsList => productsList.id === 7).map( (product) => {
                this.setState({
                    shirt: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.shirt))
            })

            this.state.productsList.filter(productsList => productsList.id === 8).map( (product) => {
                this.setState({
                    pants: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.pants))
            })

            this.state.productsList.filter(productsList => productsList.id === 9).map( (product) => {
                this.setState({
                    jacket: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.jacket))
            })

            this.state.productsList.filter(productsList => productsList.id === 10).map( (product) => {
                this.setState({
                    toy: {                   // object that we want to update
                        name: product.name, // keep all other key-value pairs, not needed right now 
                        price: product.price,
                        quantity: product.quantity,
                    }
                })
                return(console.log(this.state.toy))
            })
        });
        console.log(this.state.subtotal)
    };



    
    	
    changeQty() {
        this.setState({
            countCartProducts: {
                cakePop: isNaN(parseInt(localStorage.getItem('cakepop-count'))) ? (0) : (parseInt(localStorage.getItem('cakepop-count'))),
                appleTart: isNaN(parseInt(localStorage.getItem('appleTart-count'))) ? (0) : (parseInt(localStorage.getItem('appleTart-count'))),
                muffin: isNaN(parseInt(localStorage.getItem('muffin-count'))) ? (0) : (parseInt(localStorage.getItem('muffin-count'))),
                brownie: isNaN(parseInt(localStorage.getItem('brownie-count'))) ? (0) : (parseInt(localStorage.getItem('brownie-count'))),
                water: isNaN(parseInt(localStorage.getItem('water-count'))) ? (0) : (parseInt(localStorage.getItem('water-count'))),
                pants: isNaN(parseInt(localStorage.getItem('pants-count'))) ? (0) : (parseInt(localStorage.getItem('pants-count'))),
                toy: isNaN(parseInt(localStorage.getItem('toy-count'))) ? (0) : (parseInt(localStorage.getItem('toy-count'))),
                shirt: isNaN(parseInt(localStorage.getItem('shirt-count'))) ? (0) : (parseInt(localStorage.getItem('shirt-count'))),
                jacket: isNaN(parseInt(localStorage.getItem('jacket-count'))) ? (0) : (parseInt(localStorage.getItem('jacket-count'))),
            }
        })}

    checkOutHandler() {

        this.setState(prevState => ({
            brownie: {                   // object that we want to update
                ...prevState.brownie,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.brownie.quantity - this.state.countCartProducts.brownie
            }
        }))
        this.setState(prevState => ({
            muffin: {                   // object that we want to update
                ...prevState.muffin,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.muffin.quantity - this.state.countCartProducts.muffin
            }
        }))
        this.setState(prevState => ({
            cakePop: {                   // object that we want to update
                ...prevState.cakePop,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.cakePop.quantity - this.state.countCartProducts.cakePop
            }
        }))
        this.setState(prevState => ({
            appleTart: {                   // object that we want to update
                ...prevState.appleTart,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.appleTart.quantity - this.state.countCartProducts.appleTart
            }
        }))

        this.setState(prevState => ({
            water: {                   // object that we want to update
                ...prevState.water,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.water.quantity - this.state.countCartProducts.water
            }
        }))
        this.setState(prevState => ({
            shirt: {                   // object that we want to update
                ...prevState.shirt,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.shirt.quantity - this.state.countCartProducts.shirt
            }
        }))
        this.setState(prevState => ({
            pants: {                   // object that we want to update
                ...prevState.pants,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.pants.quantity - this.state.countCartProducts.pants
            }
        }))
        this.setState(prevState => ({
            jacket: {                   // object that we want to update
                ...prevState.jacket,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.jacket.quantity - this.state.countCartProducts.jacket
            }
        }))
        this.setState(prevState => ({
            toy: {                   // object that we want to update
                ...prevState.toy,    // keep all other key-value pairs, not needed right now 
                quantity: this.state.toy.quantity - this.state.countCartProducts.toy
            }
        }))

        
        
        
    }
    

    
    //money given back to customer
    handleChange = event => {

        event.preventDefault();
        //close checkout modal
        this.setState({showProceedToCheckOut:false});
        //open change modal
        this.setState({showPaymentOk:true});
        //calculate money given back
        this.setState({change: this.state.money - this.state.subtotal})
        
        this.changeQty();
        this.checkOutHandler();
        
        localStorage.setItem('show', false)
        }

    handleModal(){
        this.setState({showProceedToCheckOut:true})
        this.checkOutHandler();
        

    }

    inputMoney = event => {
        this.setState({money : event.target.value })
        this.setState({inputController: 1})
        
    }


    handlePut = event => {

        //event.preventDefault();
       



        axios.put("https://localhost:5001/products/2", this.state.brownie )
             .then(res => {
                 //console.log(res);
                 //console.log(res.data);
             });
        axios.put("https://localhost:5001/products/3", this.state.muffin )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });


        axios.put("https://localhost:5001/products/4", this.state.cakePop )
             .then(res => {
                 //console.log(res);
                 //console.log(res.data);
             });
        axios.put("https://localhost:5001/products/5", this.state.appleTart )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });

        axios.put("https://localhost:5001/products/6", this.state.water )
             .then(res => {
                 //console.log(res);
                 //console.log(res.data);
             });

        axios.put("https://localhost:5001/products/7", this.state.shirt )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });
        axios.put("https://localhost:5001/products/8", this.state.pants )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });
    
    
        axios.put("https://localhost:5001/products/9", this.state.jacket )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });

        axios.put("https://localhost:5001/products/10", this.state.toy )
            .then(res => {
            //console.log(res);
            //console.log(res.data);
        });

        this.setState({showPaymentOk:false})
        localStorage.clear();
        localStorage.setItem('show',false)

    }


    
    render() {
        return(
            <div>
            <Button onClick={() => { this.handleModal() }} type="submit">Proceed to checkout</Button>
             
             
             <Modal show={this.state.showProceedToCheckOut}>
                    <Modal.Header>Payment</Modal.Header>
                    <Modal.Body>
                    Subtotal:{this.state.subtotal.toFixed(2)}
                        <Form onSubmit={this.handleChange}>                            
                            <Form.Group className="w-50" controlId="formGroupShirt">
                                <Form.Label>Insert money received:</Form.Label>
                                <Form.Control type="number" onChange={this.inputMoney} />
                            </Form.Group>
                            <Button onClick={this.handleChange} type="submit">Pay</Button>
                        </Form>
                    </Modal.Body>
                </Modal>


                <Modal show={this.state.showPaymentOk}>
                    <Modal.Header>Change: {this.state.change.toFixed(2)}</Modal.Header>
                    <Modal.Body>
                            <Button onClick={this.handlePut} type="submit">Back</Button>
                    </Modal.Body>
                </Modal>


           


     

            {/* {this.state.subtotal > this.state.money && this.state.inputController > 0 ? ('Need an extra'):('')} */}
          
            </div>
        )
    }
}