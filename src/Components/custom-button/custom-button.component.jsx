import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({inverted,children, isGoogleSignIn,...otherProps})=>{
 // if the props isGoogleSignIn is true, we'll have a button with google-sign-in class as well as custom button, otherwise it's just going to be custom-button
 return(
 <button className=
 {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
 {...otherProps}
 >
  {children}
 </button>
 
 )
}
export default CustomButton