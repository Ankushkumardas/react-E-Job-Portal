// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmmH1OCiURNmBOkgN57cBoUlc_Oui2F7k",
  authDomain: "job-portal-42ced.firebaseapp.com",
  projectId: "job-portal-42ced",
  storageBucket: "job-portal-42ced.appspot.com",
  messagingSenderId: "232348811265",
  appId: "1:232348811265:web:787806326b67ec34588000",
  measurementId: "G-3V2BXM77ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;