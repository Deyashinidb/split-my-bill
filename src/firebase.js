import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDVoxoUSmxSTXzBPn13D3VNBA5ECpk_f74",
  authDomain: "splitmybills-7580b.firebaseapp.com",
  databaseURL: "https://splitmybills-7580b.firebaseio.com",
  projectId: "splitmybills-7580b",
  storageBucket: "splitmybills-7580b.appspot.com",
  messagingSenderId: "607840624115",
  appId: "1:607840624115:web:64e71a34700646551d4686"
};

  export var firebaseDb=firebase.initializeApp(firebaseConfig);
  const db = firebaseDb.database().ref();
  export default db;