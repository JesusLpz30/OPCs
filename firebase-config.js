  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC72tzCmKEoufN3i-Eu7fSRqgG-tHVcRKc",
    authDomain: "opcs-f75e1.firebaseapp.com",
    projectId: "opcs-f75e1",
    storageBucket: "opcs-f75e1.appspot.com",
    messagingSenderId: "82278540261",
    appId: "1:82278540261:web:430f4f4375e19e458bc50c",
    measurementId: "G-J0T2K9WX6G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export {db}