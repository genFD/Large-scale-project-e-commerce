import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
 const priceForStripe = price * 100
 const publishableKey = 'pk_test_51JkCUEE1Z7OGak42ggkqjmiVslbYCsQtyRR5FzgVAchp8YkuU0f2gehNKKG1QePNpPYogApxCe6l4b2kLcKG7ZEl00egTCP4Ue'
 const onToken = token => alert('Payment succesful');
 return(
  <div>
   <StripeCheckout
   label='Pay now'
   name= 'crown-clothing'
   billingAddress
   shippingAddress
   image='https://static.vecteezy.com/system/resources/previews/000/422/978/original/vector-cart-icon.jpg'
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay now'
   token={onToken}
   stripeKey={publishableKey}
   />
  </div>
 )
}
export default StripeCheckoutButton;