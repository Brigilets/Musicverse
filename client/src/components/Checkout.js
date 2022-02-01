import StripeCheckout from 'react-stripe-checkout';
import {stripeAPIKeyFE } from '../config/default.json'

const STRIPE_PUBLISHABLE = stripeAPIKeyFE;

const onToken = (user,checkout, history) => token => 
    checkout(user, token.id, history);

const Checkout = ({ amount, user, checkout, history }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout, history)}
      currency='eur'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;