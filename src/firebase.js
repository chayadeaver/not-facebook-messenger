import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4HNZlTdONluKWBsoeggsn0ZN9gqUuiUI",
    authDomain: "not-facebook-messenger.firebaseapp.com",
    databaseURL: "https://not-facebook-messenger.firebaseio.com",
    projectId: "not-facebook-messenger",
    storageBucket: "not-facebook-messenger.appspot.com",
    messagingSenderId: "426757446510",
    appId: "1:426757446510:web:6c131d52268c976d6a3f7f",
    measurementId: "G-LSJ7NS77YQ"
})

const db = firebaseApp.firestore()

export default db 