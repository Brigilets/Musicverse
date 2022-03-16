import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from './types';

export const getOrders = (id) => (dispatch )=> {
    dispatch(setOrdersLoading());
  axios.get(`/order/${id}`)
        .then(res => {console.log('res getOrders', res.data)
            dispatch({
            type: GET_ORDERS,
            payload: res.data
        })})
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const checkout = (id, source, history) => dispatch => {
    console.log('from order action',history)
    axios.post(`/order/${id}`, {source})
        .then(res => {console.log('res checkout', res.data)
            dispatch({
            type: CHECKOUT,
            payload: res.data
        })})
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        history.push('/orders')
}

export const setOrdersLoading = () => {
    return{
        type: ORDERS_LOADING
    }
}