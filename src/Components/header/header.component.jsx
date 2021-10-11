import React from "react";
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"; //hof that lets us modify our comp so that it can have access to things related to redux
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-reducer";
import CartIcon from "../cart-icon/cart-icon.component";
// 
const Header = ({currentUser})=>{
// const currentUser = useSelector(selectUser)
// console.log(currentUser);
 return (
  <div className='header'>
   <Link className='logo-container' to='/'> 
     <Logo className='logo'/>
   </Link>
   <div className="options">
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
    {
      currentUser ? 
      <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
      :
      <Link className='option' to='/signin'>SIGN IN</Link>
    }
    <CartIcon/>
   </div>
  </div>
 )
}

const mapStateToProps = state =>{
  return {
    currentUser: state.user.currentUser
  }
}
export default connect(mapStateToProps)(Header)
// export default Header 