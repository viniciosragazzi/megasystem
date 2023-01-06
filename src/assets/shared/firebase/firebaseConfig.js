import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoJg0HXhfU7UYIaeCKPnukQRTxEHhrRwI",
  authDomain: "mastersystem-46560.firebaseapp.com",
  databaseURL: "https://mastersystem-46560-default-rtdb.firebaseio.com",
  projectId: "mastersystem-46560",
  storageBucket: "mastersystem-46560.appspot.com",
  messagingSenderId: "132257400885",
  appId: "1:132257400885:web:63bdfbb2fd1e6caf7c097c",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
