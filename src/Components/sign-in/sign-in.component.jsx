import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
 constructor(props){
  super(props)
  this.state={
   email: '',
   password:''
  }
 }
handleSubmit = async (e)=>{
 e.preventDefault()
 const {email, password} = this.state
  try {
    auth.signInWithEmailAndPassword(email,password)
  } catch (error) {
    console.log(error);
  }

 this.setState({email:'', password:''})
}
handleChange = (e)=>{
 const {value,name} = e.target

 this.setState({[name]: value})
}

 render(){
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput 
        type="email" 
        name='email' 
        label="Email"
        value={this.state.email} 
        handleChange={this.handleChange} 
        required />

        <FormInput 
        type="password"
        name='password'
        label="Password" 
        value={this.state.password} 
        required handleChange={this.handleChange} />
      <div className='buttons'>
        <CustomButton type="button">Sign in</CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>
      </div>
     </form>

    </div>
  )
 }
}
export default SignIn