import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE = process.env.REACT_APP_STRIPE_API_KEY;

const onToken = (user, checkout, history) => async (token) =>{
 try{
   await checkout(user, token.id, history);
 }catch(err){
console.error(err)
 } 
}

const Checkout = ({ amount, user, checkout, history }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout, history)}
    currency="EUR"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
