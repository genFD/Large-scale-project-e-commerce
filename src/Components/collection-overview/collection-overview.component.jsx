import React from 'react'

import './collections-overview.styles.scss'
import CollectionPreview from '../preview-collection/preview-collection.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";


const CollectionOverview = ({collections})=>{
 return (
  <div className='collection-overview'>
   {collections.map(({id, ...otherProps})=>{ 
      return <CollectionPreview 
      key={id} 
      {...otherProps}  
      /> 
      })}
  </div>
 )
}
const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollectionForPreview
  }
)


export default connect(mapStateToProps)(CollectionOverview)