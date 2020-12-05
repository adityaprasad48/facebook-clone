import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAHWSYqw8ZJNXCOVt_3_1-AZGcyJMc2Y7o",
  authDomain: "facebook-7c061.firebaseapp.com",
  databaseURL: "https://facebook-7c061.firebaseio.com",
  projectId: "facebook-7c061",
  storageBucket: "facebook-7c061.appspot.com",
  messagingSenderId: "718649126221",
  appId: "1:718649126221:web:e43b9862e739f627691b04",
  measurementId: "G-GYX4SB3GW7"
}


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;