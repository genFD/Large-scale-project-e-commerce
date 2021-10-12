import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({id, name, price, imageUrl})=>{
 return (
  <div className='collection-item'>
   <div style={{backgroundImage:` url(${imageUrl})`}} className='image'>
  </div>
  <div className="collection-footer">
   <span className='name'>{name}</span>
   <span className='name'>${price}</span>
  </div>
  <CustomButton inverted>Add to Cart</CustomButton>
  </div>
   )
}

export default CollectionItem