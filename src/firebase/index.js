import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8t3Y2HDlqwsDGCvV9xDXF9cbEFN19mUw",
  authDomain: "my-second-2-project.firebaseapp.com",
  projectId: "my-second-2-project",
  storageBucket: "my-second-2-project.appspot.com",
  messagingSenderId: "1073829204660",
  appId: "1:1073829204660:web:da4fe6d07f5962d3e67de1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }