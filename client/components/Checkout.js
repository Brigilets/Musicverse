import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_51KLjm9JuqXwK9nyi0Bc7Npv5VYnsqnX4qrXexzlF079IpXypil9F9ovfanALcr7sq9ku7vrgPgLlXN3LzhygE3ic007LmQ838p';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='eur'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;