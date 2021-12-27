import axios from "axios";
import React from "react";
import {Button,ListGroup,Badge,Card} from 'react-bootstrap';



export default class PosProducts extends React.Component {
    
    state = {
        productsList: [],
        controller: 0,
        //total price of products
        subtotal: 0,
        //products in cart
        buttonVariant: 'primary',

        cakePop: {
            count:  0,
            price:  0,
        },
        appleTart: {
            count:  0,
            price:  0,
        },
        muffin: {
            count:  0,
            price:  0,
        },
        brownie: {
            count:  0,
            price:  0,
        },
        water: {
            count:  0,
            price:  0,
        },
        pants: {
            count:  0,
            price:  0,
        },
        toy: {
            count:  0,
            price:  0,
        },
        shirt: {
            count:  0,
            price:  0,
        },
        jacket: {
            count:  0,
            price:  0, 
        }
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
            <h3>List of products available</h3>
            <p>Click on product name to add to cart</p>

                
       
            
            <ListGroup >
            {this.state.productsList.map(product =>
             <ListGroup.Item key={product.name}><Button variant={this.state.buttonVariant} onClick={() => this.productAdd(product.name)}>{product.name}</Button> </ListGroup.Item> )}</ListGroup>
          
            <h3>Products in shopping cart</h3>
            
            {/* If there is none in cart do nothing ? if there is show count and row total price */}



            <Card body>
            <ListGroup as="ol" numbered >
                    
                

                    {this.state.cakePop.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Cake Pop ............ 1.35</div>
                            Items in cart: {this.state.cakePop.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.cakePop.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.appleTart.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Apple Tart ............ 1.50</div>
                            Items in cart: {this.state.appleTart.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.appleTart.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.muffin.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Muffin ............ 1.00</div>
                            Items in cart: {this.state.muffin.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.muffin.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.brownie.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Brownie ............ 0.65</div>
                            Items in cart: {this.state.brownie.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.brownie.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.water.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Water ............ 1.50</div>
                            Items in cart: {this.state.water.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.water.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.pants.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Pants ............ 3.00</div>
                            Items in cart: {this.state.pants.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.pants.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.toy.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Toy ............ 1.00</div>
                            Items in cart: {this.state.toy.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.toy.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.shirt.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Shirt ............ 2.00</div>
                            Items in cart: {this.state.shirt.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.shirt.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                    {this.state.jacket.count === 0 ? ('') : (<ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Jacket ............ 4.00</div>
                            Items in cart: {this.state.jacket.count}
                        </div>
                        <Badge variant="primary" pill>
                           Total: {this.state.jacket.price.toFixed(2)}
                        </Badge>
                    </ListGroup.Item>)}

                
            </ListGroup>
            <Card.Footer className="text-muted"><h4 className="float-end">Subtotal:{this.state.subtotal.toFixed(2)}</h4></Card.Footer>
            
            </Card>
            
            
            </div>

)
  
    }
}