const dotenv = require('dotenv');
dotenv.config()
const PORT  = process.env.PORT || 4000;
const prod = process.env.NODE_ENV === 'production';
const MONGODB_URI = process.env.MONGODB_URI;
const jwtsecret = process.env.jwtsecret;
const StripeAPIKeyBE = process.env.StripeAPIKeyBE;

module.exports={
     PORT  : process.env.PORT || 4000,
     prod : process.env.NODE_ENV === 'production',
     MONGODB_URI : process.env.MONGODB_URI,
     jwtsecret : process.env.jwtsecret,
     StripeAPIKeyBE : process.env.StripeAPIKeyBE
}