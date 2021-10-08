import React from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import ShopPage from './Pages/shopPage/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  // open subscription : whenever any changes occur from any source related to this app, we dont need to fetch
  // componentDidMount() {
  //   auth.onAuthStateChanged(user =>{
  //     this.setState({
  //       currentUser:user
  //     })
  //   })
  // }
  //close subscription
  unsubscribeFromAuth = null;

  componentDidMount() {
    /// check if there's user signedIn and set the state with info about user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //setting the state
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        //app need to know if the useAuth is null/if the user logged out
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* make our header know whether a user is sign in or sign out by giving it the app current userstate rest of the code in the header comp */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
