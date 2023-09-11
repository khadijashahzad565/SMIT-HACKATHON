
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL_rF8h6RuwyNm-B81Q62RLn5s5TRKYb0",
  authDomain: "authentication-6e8e0.firebaseapp.com",
  projectId: "authentication-6e8e0",
  storageBucket: "authentication-6e8e0.appspot.com",
  messagingSenderId: "764825057188",
  appId: "1:764825057188:web:f70ae224ec84ef46453331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

function addClassToDb(timings,schedule,teacherName,secName,courseName,batchName) {
  return addDoc(collection(db, "class"), { timings,schedule,teacherName,secName,courseName,batchName })
}
function addStudentToDb(name,fathername,contactNo,rollNo,cnic,courseName,image,selectValue) {
  return addDoc(collection(db, "students"), {name,fathername,contactNo,rollNo,cnic,courseName,image,selectValue})
}
async function uploadImage(image) {
  const storageRef = ref(storage, `image/${image.name}`)
  const snapshot = await uploadBytes(storageRef, image)
  const url = await getDownloadURL(snapshot.ref)
  return url
}
function getRealTime(callback) {
  onSnapshot(collection(db, "class"), (querySnapshot) => {
      const clas = []

      querySnapshot.forEach((doc) => {
          clas.push({ id: doc.id, ...doc.data() })
      });
      callback(clas)
  });
}
export {
  signInFirebase,
  addClassToDb,
  uploadImage,
  addStudentToDb,
  getRealTime
}
