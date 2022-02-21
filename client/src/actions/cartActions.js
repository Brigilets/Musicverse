import axios from "axios";
import { returnErrors } from "./errorActions";
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING } from "./types";

export const getCart = (id) => (dispatch) => {
  dispatch(setCartLoading());
  axios
    .get(`/cart/${id}`)
    .then((res) =>{ console.log('getCart res data', res)
      dispatch({
        type: GET_CART,
        payload: res.data,
      })}
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addToCart = (id, productId, quantity) => (dispatch) => {
  axios
    .post(`/cart/${id}`, { productId, quantity })
    .then((res) =>{console.log('res add to cart',res)
      dispatch({
        type: ADD_TO_CART,
        payload: res.data,
      })}
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteFromCart = (userId, itemId) => (dispatch) => {
  axios
    .delete(`/cart/${userId}/${itemId}`)
    .then((res) =>
      dispatch({
        type: DELETE_FROM_CART,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setCartLoading = () => {
  return {
    type: CART_LOADING,
  };
};
