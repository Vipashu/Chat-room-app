
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAnbp__4ievr1_dBUiBwLP0N4J13itkvfE",
  authDomain: "chat-app-8fbe9.firebaseapp.com",
  projectId: "chat-app-8fbe9",
  storageBucket: "chat-app-8fbe9.appspot.com",
  messagingSenderId: "273566025630",
  appId: "1:273566025630:web:33a753b1fa4febb364f88f",
  measurementId: "G-KBES52D06Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
