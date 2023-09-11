import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import {getDatabase, set , ref, onValue }from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const auth = getAuth();
const database = getDatabase();

const signup = () => {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {

            alert("Successfully Signed Up", response);
            window.location.href ='../login/login.html'


            let userId = auth.currentUser.uid;
            console.log(userId);
            let usersReference = ref(database, "users/" + userId);
            let usersObj = {
              username: username,
              email: email,
              password: password,
            };
            set(usersReference, usersObj);
        


     
})

.catch((error) => {

    alert("Please try again: " + error.message);
});
}


let signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener("click", signup);





// Loginnnn


const login = () => {


    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            alert("successfully Login", response);
             window.location.href = "https://www.google.com/search?sca_esv=563294644&sxsrf=AB5stBgj18mqV4vuqAHLsACk6TSsLw9UUA:1694061899147&q=food&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjloeet2JeBAxVdVKQEHZFOAU8Q0pQJegQIDhAB&biw=1152&bih=696&dpr=1";

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



