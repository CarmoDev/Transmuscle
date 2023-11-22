import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAFQku0qD1q5GR4zFgH6_3G-tspbl6BOTc",
  authDomain: "transmuscle-849c5.firebaseapp.com",
  databaseURL: "https://transmuscle-849c5-default-rtdb.firebaseio.com",
  projectId: "transmuscle-849c5",
  storageBucket: "transmuscle-849c5.appspot.com",
  messagingSenderId: "405649869520",
  appId: "1:405649869520:web:b854b3f7631d22b4d56cd5",
  measurementId: "G-YFREY93XEP",
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
