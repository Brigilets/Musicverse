import { Component } from 'react';
import AddItem from './AddItem';
import Tickets from './Tickets';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Oder';

class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/tickets'>
                        <Tickets/>
                    </Route>
                    <Route path='/addItem'>
                        <AddItem/>
                    </Route>
                    <Route path='/cart'>
                        <Cart/>
                    </Route>
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Redirect to='/tickets'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main))