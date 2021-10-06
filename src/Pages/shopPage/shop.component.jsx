import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor(props){
   super()
   this.state= {
   collections: SHOP_DATA,
  }
 }
 render(){
  const {collections} = this.state
  return (
   <div className='shop-page'>
    {
     collections.map(({id, ...otherProps})=>{
      return <CollectionPreview key={id} {...otherProps} />
     })
    }
   </div>
  )
 }

}

export default ShopPage;