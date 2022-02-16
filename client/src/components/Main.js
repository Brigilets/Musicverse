
import AddItem from './AddItem';
import Tickets from './Tickets';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Order';
import Home from './Home';
import LineUp from './Lineup';
import Philosophy from './Philosophy';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main =() =>{
    return (
        <div>
            <Switch>
             <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/philosophy">
                        <Philosophy/>
                    </Route>
                    <Route path="/lineup">
                        <LineUp/>
                    </Route>
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
                <Redirect to='/home'/>
            </Switch>
        </div>
    )
}

export default withRouter(connect()(Main))