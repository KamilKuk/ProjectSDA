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
const signInBtn = document.getElementById('signInBtn');
const signupModal = document.getElementById('signupModal');
const modalTitle = document.getElementById('modalTitle');
const actionButton = document.getElementById('actionButton');

signUpBtn.addEventListener('click', openSignUpModal);
signInBtn.addEventListener('click', openSignInModal);

function openSignUpModal() {
    modalTitle.textContent = 'Sign Up';
    actionButton.textContent = 'Create Account';
    signupModal.style.display = 'block';
}

function openSignInModal() {
    modalTitle.textContent = 'Sign In';
    actionButton.textContent = 'Log In';
    signupModal.style.display = 'block';
}

function performAction() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const email = emailInput.value;
    const password = passwordInput.value;

    if (actionButton.textContent === 'Create Account') {
        firebase.auth().createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created:', userCredential.user);
            })
            .catch((error) => {
                console.log('Error creating account:', error);
            });
    } else if (actionButton.textContent === 'Log In') {
        firebase.auth().signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Logged in:', userCredential.user);
            })
            .catch((error) => {
                console.log('Error logging in:', error);
            });
    }

    closeSignUpModal();
}

actionButton.addEventListener('click', performAction);

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeSignUpModal);

function closeSignUpModal() {
    signupModal.style.display = 'none';
}
