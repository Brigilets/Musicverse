import { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';
import Footer from './Footer';

class Orders extends Component {

    state = {
        loaded: false,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        getOrders: PropTypes.func.isRequired
    }

    ongetOrders = async (id) => {
        await this.props.getOrders(id);
        this.state.loaded = true;
    }

    render(){
        const user = this.props.user;
        if(this.props.isAuthenticated && !this.props.order.loading && !this.state.loaded){
            this.ongetOrders(user._id);
        }
        return(
            <body style={{backgroundColor:'rgba(8, 8, 8, 0.95)', minHeight:'100vh' }}>
             <AppNavbar/>
            <div>
               
                {this.props.isAuthenticated ?
                    <Fragment>
                        {this.props.order.orders!==[] ? null :
                            <Alert color="info" className="text-center">You have no orders!</Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }

                {this.props.isAuthenticated && !this.props.order.loading && this.state.loaded && this.props.order.orders.length?
                    <Container className='mb-4'>
                        <div className="row">
                            {this.props.order.orders.map((order)=>(
                                <div className="col-md-12">
                                    <Card className="mb-4" style={{border:'2px solid #f7f7f7',backgroundColor: 'rgba(10, 7, 7, 0.93)', color:'white'}}>
                                        <CardBody>
                                            <CardTitle tag="h4">{order.items.length} items - Total cost: {order.total}€</CardTitle>
                                            <div className="row">
                                            {order.items.map((item)=>(
                                                <div className="col-md-4">
                                                    <Card className="mb-2" style={{border:'2px solid #f7f7f7',backgroundColor: '#292b2c', color:'white'}}>
                                                        <CardBody>
                                                            <CardTitle tag="h5">{item.name} ({item.quantity} pieces)</CardTitle>
                                                            <CardSubtitle tag="h6">{item.price}€/piece</CardSubtitle>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            ))}
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <br/>
                                </div>
                                
                            ))}
                        </div>
                    </Container>
                :null}
                <Footer/>
            </div>
            </body>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.order,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getOrders})(Orders);