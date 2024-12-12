// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJNytfvzLK3o2VbhxkeipPPUgYrUjyI3M",
  authDomain: "student-progress-tracking.firebaseapp.com",
  projectId: "student-progress-tracking",
  storageBucket: "student-progress-tracking.firebasestorage.app",
  messagingSenderId: "58516868799",
  appId: "1:58516868799:web:0b3bc40ba3b1beb695000a",
  measurementId: "G-H3863N8GJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//students
const Uname = document.getElementById('username').value;
const Pass = document.getElementById('password').value;

//submit
/* const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()

})*/