import { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import {Card, CardBody, Alert, Container} from 'reactstrap';
import Footer from './Footer';


class Orders extends Component {

   /* constructor(props){
        super(props)
        this.state = {loaded:false}
     
    }*/
    state = {
        loaded: false,
        orders: []
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        getOrders: PropTypes.func.isRequired
    }

    
    ongetOrders =  (id) => {
     
       this.props.getOrders(id);
       this.setState({
           loaded:true,
        orders: this.props.orders
    }); 
   console.log('order props', this.state.orders)
}

    render(){
        const user = this.props.user;
        console.log(user)
       if(this.props.isAuthenticated && !this.props.order.loading && !this.state.loaded){
       
            this.ongetOrders(user._id);
        }
        console.log('this state loaded order', this.state.loaded)

        console.log('is authenticated', this.props.isAuthenticated);
        console.log('is loading', !this.props.order.loading);
        console.log('is loaded', this.state.loaded)
        console. log('orders length', this.props.order.orders.length ) 
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
            
                   

                    <Container className='bg-light' className="main-order">
                        <div className="row justify-content-center mt-2 mb-2 pt-1">

                          {this.props.order.orders.map((order,key)=>(
                                <div key={key} className=" col-md-10 justify-content-center ">
                                    <Card className="card  p-0 ml-6 border justify-content-center border-dark " >
                                        <CardBody className='pt-1 card-body' >

                                            {order.items.map((item,key)=>(
                                                <div key={key} className="col-md-4" className='text'>

                                                            {item.name} - {item.quantity}<br />
                                                             {item.price}€
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