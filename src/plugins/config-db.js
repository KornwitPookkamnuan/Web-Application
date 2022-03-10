import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDnV4dUKNT3XvpTLFCoAzHd9FAGvqrgxaE",
  authDomain: "covid19-108ac.firebaseapp.com",
  projectId: "covid19-108ac",
  storageBucket: "covid19-108ac.appspot.com",
  messagingSenderId: "662694661289",
  appId: "1:662694661289:web:70be878349918d547cedb8",
  measurementId: "G-9FR2MLNCN9"
});
const db = getFirestore(firebaseApp);
export default db;
