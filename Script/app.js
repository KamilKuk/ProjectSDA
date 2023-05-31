import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqspU7BM4AxBwF-KV7mkJBUMT7elR4L10",
    authDomain: "projectsda-ac8be.firebaseapp.com",
    projectId: "projectsda-ac8be",
    storageBucket: "projectsda-ac8be.appspot.com",
    messagingSenderId: "28733467482",
    appId: "1:28733467482:web:9df089749fd8d5e282e163",
    measurementId: "G-6JMDM5F29L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signUpBtn = document.getElementById('signUpBtn');
const signupModal = document.getElementById('signupModal');

signUpBtn.addEventListener('click', openSignUpModal);

function openSignUpModal() {
    signupModal.style.display = 'block';
}

function createAccount() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Tutaj możesz wykonać dodatkowe operacje po utworzeniu konta
            console.log('Account created:', userCredential.user);
        })
        .catch((error) => {
            // Tutaj możesz obsłużyć błędy podczas tworzenia konta
            console.log('Error creating account:', error);
        });
}
