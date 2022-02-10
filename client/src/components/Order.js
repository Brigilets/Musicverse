import { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import {Card, CardBody, Alert, Container} from 'reactstrap';
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
       this.setState({loaded: true})
    }

    render(){
        const user = this.props.user;
        console.log(user)
        if(this.props.isAuthenticated && !this.props.order.loading && !this.state.loaded){
            this.ongetOrders(user._id);
        }
        console.log(this.state.loaded)
        return(
            <div>
            <AppNavbar/>
                {this.props.isAuthenticated ?
                    <Fragment>
                        {this.props.order.orders!==[] ? null :
                            <Alert color="info" className="text-center">You have no orders!</Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }

                {this.props.isAuthenticated && !this.props.order.loading && this.state.loaded && this.props.order.orders.length?
                    <Container className='bg-light' className="main">
                        <div className="row justify-content-center mt-2 mb-2 pt-1">

                            {this.props.order.orders.map((order,key)=>(
                                <div key={key} className="col-md-8">
                                    <Card className="card-order p-0 border border-dark " >
                                        <CardBody className='pt-1' >

                                            {order.items.map((item,key)=>(
                                                <div key={key} className="col-md-4" className='text'>

                                                            {item.name}-{item.quantity} {item.price}€
                                                </div>
                                            ))}
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
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.order,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getOrders})(Orders);