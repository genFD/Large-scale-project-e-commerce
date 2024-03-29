import React from 'react'
import './custom-button.styles.scss'
import { CustomButtonContainer } from './custom-button.styles'
const CustomButton = ({children, ...props})=>{
 // if the props isGoogleSignIn is true, we'll have a button with google-sign-in class as well as custom button, otherwise it's just going to be custom-button
 return(
 <CustomButtonContainer {...props}
 >
  {children}
 </CustomButtonContainer>
 
 )
}
export default CustomButton