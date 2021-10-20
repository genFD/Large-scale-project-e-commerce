import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component'
import CollectionPage from "../collection/collection.component";
import { store, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
unsubscribeFromSnapshot = null

componentDidMount (){
  const {updateCollections} = this.props
  const collectionRef = store.collection('collections')
  collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionSnapshotToMap(snapshot)
    updateCollections(collectionsMap)
  })
}
  render(){
    const {match} =  this.props
    return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  )
  }
}
const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps) (ShopPage)