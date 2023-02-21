
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlyZ-jahIHLG9EzlvfFPBe6UWhNkuZEbs",
  authDomain: "realtor-clone-app-bb67e.firebaseapp.com",
  projectId: "realtor-clone-app-bb67e",
  storageBucket: "realtor-clone-app-bb67e.appspot.com",
  messagingSenderId: "230478304085",
  appId: "1:230478304085:web:1ea78efac84ebc8c2315dc",
  measurementId: "G-Y4BTPKSHG9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
console.log(auth)

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    }).catch(error => console.log(error))
}
