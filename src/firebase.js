import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDhvDPzvmbX0-eSHaeoF85ax8hvoS3j7vU",
    authDomain: "crud-39187.firebaseapp.com",
    projectId: "crud-39187",
    storageBucket: "crud-39187.appspot.com",
    messagingSenderId: "901794425621",
    appId: "1:901794425621:web:97589167b9c23b4638d71c"

}

export const firebaseApp = firebase.initializeApp(firebaseConfig)