import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATVFxMyRASCpGjeoaslp0i1duMGJy9Cko",
  authDomain: "corporate-messanger-46a80.firebaseapp.com",
  databaseURL: "https://corporate-messanger-46a80.firebaseio.com",
  projectId: "corporate-messanger",
  storageBucket: "corporate-messanger.appspot.com",
  messagingSenderId: "73079622153",
  appId: "1:73079622153:web:a52068f456732458"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire;