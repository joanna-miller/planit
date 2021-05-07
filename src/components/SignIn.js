import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from './../firebaseConfig';

class SignIn extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <>
        { user ? 
        <button onClick={signOut}>Sign out</button> :
        <button onClick={signInWithGoogle}>Sign in with Google</button> }
      </>
    )
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);

