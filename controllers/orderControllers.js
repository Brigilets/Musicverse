const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
//const dotenv = require('dotenv').config();
const {StripeAPIKeyBE} = require('../const');
const stripe = require('stripe')(StripeAPIKeyBE);

module.exports.get_orders = async (req,res) => {
    const userId = req.params.id;
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders));
}

module.exports.checkout = async (req,res) => {
    try{
        const userId = req.params.id;
        const {source} = req.body;
        let cart = await Cart.findOne({userId});
        let user = await User.findOne({_id: userId});
        const email = user.email;

        console.log('cart', cart )
              console.log('cart total', cart.total)
        if(cart){
            /*const charge = await stripe.charges.create({
                amount: cart.total,
                currency: 'eur',
                receipt_email: email,
                customer: user.name
            })*/


            const charge = await stripe.charges.create({
                amount: cart.total,
                currency: 'eur',
                description: 'Musicverse Tickets',
                source,
               
              })
              
            console.log('charge from stripe',charge)
            if(!charge) throw Error('Payment failed');
            if(charge){
             const order = await Order.create({
                    userId,
                    items: cart.items,
                    total: cart.total
                });
               
                await Cart.findByIdAndDelete({_id:cart.id});
                
               console.log('order after checkout', order)
                await order.save()
                return res.status(201).send(order);
            }
        }
        else{
            res.status(500).json({message: "You do not have items in cart"}); 
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err});
    }
}