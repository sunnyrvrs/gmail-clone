import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcg3ybuw6vDkKts9ffJydOARurHvq5c3E",
  authDomain: "clone-yt-727e0.firebaseapp.com",
  databaseURL: "https://clone-yt-727e0-default-rtdb.firebaseio.com",
  projectId: "clone-yt-727e0",
  storageBucket: "clone-yt-727e0.appspot.com",
  messagingSenderId: "46896356689",
  appId: "1:46896356689:web:33ed54804e4be375dec770",
  measurementId: "G-TFWJ8B29XZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };