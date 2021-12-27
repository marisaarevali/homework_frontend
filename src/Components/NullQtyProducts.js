import axios from "axios";
//import React from "react";
import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';



export default class NullQtyProducts extends React.Component {
    state = {

        modalShow: localStorage.getItem('show') === null ? (true) : (false),

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
             });
             axios.put("https://localhost:5001/products/8",productsPants )
             .then(res => {
                 console.log(res);
                 console.log(res.data);             });
             axios.put("https://localhost:5001/products/9",productsJacket )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
             });
             axios.put("https://localhost:5001/products/10",productsToy )
             .then(res => {
                 console.log(res);
                 console.log(res.data);
             });
    };
    componentDidMount() {
        axios.get('https://localhost:5001/products').then(res => {
            // console.log(res);
            this.setState({ productsList: res.data });
            //console.log(this.state.productsList);    
        });
    };

    handleModal() {

        
        this.setState({modalShow:false})
        localStorage.setItem('show', false)
    }

    render() {
        return(
            
            <div>
                <Modal show={this.state.modalShow}>
                    <Modal.Header>Welcome!</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmitShirt}>
                            <p>Insert quantities of these products to start the day!</p>
                            <Form.Group className="w-50" controlId="formGroupShirt">
                                <Form.Label>Shirt quantity:</Form.Label>
                                <Form.Control type="number" placeholder="Shirt quantity" onChange={this.qtyChangeShirt} />
                            </Form.Group>
                            <Form.Group className="w-50" controlId="formGroupPants">
                                <Form.Label>Pants quantity:</Form.Label>
                                <Form.Control type="number" placeholder="Pants quantity" onChange={this.qtyChangePants} />
                            </Form.Group>
                            <Form.Group className="w-50" controlId="formGroupJacket">
                                <Form.Label>Jacket quantity:</Form.Label>
                                <Form.Control type="number" placeholder="Jacket quantity" onChange={this.qtyChangeJacket} />
                            </Form.Group>
                            <Form.Group className="w-50" controlId="formGroupToy">
                                <Form.Label>Toy quantity:</Form.Label>
                                <Form.Control type="number" placeholder="Toy quantity" onChange={this.qtyChangeToy} />
                            </Form.Group>
                            <Button onClick={() => { this.handleModal() }} type="submit">Add</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            
        )
    }
}