import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSIgnUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
constructor(props){
  super(props);

  this.state={
    currentUser:null
  }
}

unsibscribeFromAuth = null;

componentDidMount(){
 this.unsibscribeFromAuth= auth.onAuthStateChanged(user=>{
    this.setState({currentUser: user})
    console.log(user)
  })
}

componentWillUnmount(){
  this.unsibscribeFromAuth()
}

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSIgnUpPage />} />
        </Routes>
        <div></div>
      </div>
    );
  }
}

export default App;
