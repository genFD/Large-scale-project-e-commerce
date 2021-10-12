import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropdown = ({cartItems})=>{
return (
 <div className='cart-dropdown'>
  <div className="cart-items">
  {
    cartItems.map((cartItem)=> <CartItem key={cartItem.id}item ={cartItem}/>)
  }
  </div> 
    <CustomButton>Go to checkout</CustomButton>
 </div>
)


}
const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems,
})
export default connect(mapStateToProps)(CartDropdown)