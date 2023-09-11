import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import {getDatabase, set , ref, onValue }from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const auth = getAuth();
const database = getDatabase();




const login = () => {


    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            alert("successfully Login", response);
            window.location.href ='../attendence/attendence.html'
             let userId = auth.currentUser.uid;
             let usernameRef = ref(database, "users/" + userId);
             onValue(usernameRef, (data)=> {
                 let userData = data.val().username;
                 console.log(userData);
                 document.getElementById("username").innerHTML = userData;
             })




        })
        .catch((error) => {

            alert("Please try again: " + error.message);
        });
}

let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", login);



