import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB06eg-18cijHsu5C_vc4TN09XLyyDMEmc",
  authDomain: "react-spas-324b8.firebaseapp.com",
  databaseURL: "https://react-spas-324b8.firebaseio.com",
  projectId: "react-spas-324b8",
  storageBucket: "react-spas-324b8.appspot.com",
  messagingSenderId: "527557954538"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
