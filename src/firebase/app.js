import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  update,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAILMYJKHPRu9RSQgAC3nNjatVhu1MZDT4",
  authDomain: "simple-todo-app-d2765.firebaseapp.com",
  databaseURL: "https://simple-todo-app-d2765-default-rtdb.firebaseio.com",
  projectId: "simple-todo-app-d2765",
  storageBucket: "simple-todo-app-d2765.appspot.com",
  messagingSenderId: "908315663445",
  appId: "1:908315663445:web:3c6805b54cce562fa4c8dc",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const login = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    localStorage.setItem("todoUser", JSON.stringify(user.uid));
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = GoogleAuthProvider.credentialFromError(error);
  }
};

export const Logout = async () => {
  const auth = getAuth(app);

  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export function saveTodo(data) {
  const db = getDatabase();
  const newPostKey = data.id;
  const updates = {};
  updates["/todos/" + data.uid + "/" + newPostKey] = data;
  return update(ref(db), updates);
}

export function getTodos(userID) {
  const db = getDatabase();
  const todosRef = ref(db, "todos/" + userID);
  onValue(todosRef, (snapshot) => {
    const data = snapshot.val();
  });
  onChildChanged(todosRef, (snapshot) => {
    const data = snapshot.val();
  });
  onChildRemoved(todosRef, (snapshot) => {
    const data = snapshot.val();
  });
}
