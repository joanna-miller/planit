import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

// REACT_APP_FIREBASE_API_KEY = "AIzaSyDeuah8SLyzOo2T3pMP_8lWOroCW6sZ3PI"
// REACT_APP_FIREBASE_AUTH_DOMAIN = "planit-88d66.firebaseapp.com"
// REACT_APP_FIREBASE_DATABASE_URL = "https://planit-88d66-default-rtdb.firebaseio.com"
// REACT_APP_FIREBASE_PROJECT_ID = "planit-88d66"
// REACT_APP_FIREBASE_STORAGE_BUCKET = "planit-88d66.appspot.com"
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "721804013500"
// REACT_APP_FIREBASE_APP_ID = "1:721804013500:web:d36f23e8cea899476105b9"