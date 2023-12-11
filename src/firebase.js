import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDl5H5tlwqjXXp9IkS-E-OhpNY5XUSG10",
  authDomain: "dashboard-96fe1.firebaseapp.com",
  projectId: "dashboard-96fe1",
  storageBucket: "dashboard-96fe1.appspot.com",
  messagingSenderId: "189923865872",
  appId: "1:189923865872:web:798ef2caf56ab22d4e6195"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
