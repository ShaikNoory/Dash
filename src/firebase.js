import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtg0YNsGbTV0NhiR30zP4IB15MGniZLe4",
  authDomain: "demoapp-d65db.firebaseapp.com",
  projectId: "demoapp-d65db",
  storageBucket: "demoapp-d65db.appspot.com",
  messagingSenderId: "623605313461",
  appId: "1:623605313461:web:a8f35c3cb16e32aa6eb3fc"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
