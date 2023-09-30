import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBCuG9rX716kQXtyuvlgIwjHvz87_sqMSE",
    authDomain: "bezva-project.firebaseapp.com",
    projectId: "bezva-project",
    storageBucket: "bezva-project.appspot.com",
    messagingSenderId: "555771201985",
    appId: "1:555771201985:web:ff0141391de6fa6213c740"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }