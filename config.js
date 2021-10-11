import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5dAEc1O_SO-zl-ftHkfEcbe04nDTR5fk",
  authDomain: "votingapp-56735.firebaseapp.com",
  databaseURL: "https://votingapp-56735-default-rtdb.firebaseio.com",
  projectId: "votingapp-56735",
  storageBucket: "votingapp-56735.appspot.com",
  messagingSenderId: "371346591958",
  appId: "1:371346591958:web:68abc5512088923b487977"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();