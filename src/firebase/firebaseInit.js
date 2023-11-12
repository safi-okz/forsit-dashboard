// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtK-o6WorPUIlq9e69ZkHiAP6Cos_2fog",
  authDomain: "forist-task.firebaseapp.com",
  projectId: "forist-task",
  storageBucket: "forist-task.appspot.com",
  messagingSenderId: "625608214617",
  appId: "1:625608214617:web:cbc9dea711cb4b77838948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default getDatabase(app);