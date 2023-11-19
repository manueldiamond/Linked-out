import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB9CPkncq-h92rCmJE47UTWCEHb9QFhDM",
  authDomain: "linked-in-clone-tutorial.firebaseapp.com",
  projectId: "linked-in-clone-tutorial",
  storageBucket: "linked-in-clone-tutorial.appspot.com",
  messagingSenderId: "162264540476",
  appId: "1:162264540476:web:6528c8ee0874edb6302a39",
  measurementId: "G-XC9Y6ETQVZ"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

// async function getDB(collection_name){
//    return await getDoc(collection(db,collection_name))
// }
// async function addDB(collection_name,data={}){
//     try{
//         const docRef=await addDoc(collection(db,collection_name),data)
//         return docRef
//     }catch(e){
//         return "ERROR: "+e
//     }   
// }
export{db,auth};