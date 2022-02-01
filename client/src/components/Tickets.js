import { Component } from 'react';
import AppNavbar from './AppNavbar';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { addToCart, getCart } from '../actions/cartActions';


class Tickets extends Component {
    state= {
        loaded: false
    }
    componentDidMount(){
        this.props.getItems();
        
    }

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
       
    }

    getCartItems = async (id) => {
        
        await this.props.getCart(id);
        this.setState({loaded: true})
    }

    render(){
        const user = this.props.user;
        const { items } = this.props.item;
        
        
        if(this.props.isAuthenticated && !this.props.cart.loading && !this.state.loaded){
            this.getCartItems(user._id);
        }
        console.log('cart from tickets',this.props.cart)

        return (
            <div>
            <AppNavbar/>
            <Container>
                <div className="row">
                {items.map((item)=>(
                    <div className="col-md-4">
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle tag="h6"> {item.price}€</CardSubtitle>
                            <CardText>{item.category}</CardText>
                            {this.props.isAuthenticated ? 
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={this.onAddToCart.bind(this, user._id, item._id)}
                                    >Add To Cart</Button> :
                                    null}
                        </CardBody>
                    </Card>
                    </div>
                ))}
                 </div>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    cart: state.cart
})

export default connect(mapStateToProps, {getItems, addToCart, getCart})(Tickets);