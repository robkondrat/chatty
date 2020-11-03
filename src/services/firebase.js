import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyB0H5d6EzReopPZFJu1ToMXhcyL_OprdDM",
  authDomain: "chatty-92b5d.firebaseapp.com",
  databaseURL: "https://chatty-92b5d.firebaseio.com"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();

