import React from "react";
import './collection-item.styles.scss'
import {connect} from 'react-redux'
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({id, item, addItem })=>{
   const {name, price, imageUrl} = item
 return (
  <div className='collection-item'>
   <div style={{backgroundImage:` url(${imageUrl})`}} className='image'>
  </div>
  <div className="collection-footer">
   <span className='name'>{name}</span>
   <span className='name'>${price}</span>
  </div>
  <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
  </div>
   )
}
const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)