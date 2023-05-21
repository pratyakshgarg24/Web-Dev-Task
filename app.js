import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBfHR6E-0wCeWkWbQZ3yEwRYbOQZ6gzGcs",
    authDomain: "survey-form-5c8a1.firebaseapp.com",
    projectId: "survey-form-5c8a1",
    storageBucket: "survey-form-5c8a1.appspot.com",
    messagingSenderId: "813345228486",
    appId: "1:813345228486:web:5893bf03e660af701af9c7"
  };

  const app = initializeApp(firebaseConfig);
  const db=getFirestore();
  const colRef= collection(db, "formData");

  const form= document.querySelector(".input-fields");
  const name= document.querySelector("#name");
  const dob= document.querySelector("#dob");
  const email= document.querySelector("#email");
  const curKnowledge= document.querySelector("#curKnowledge");
  const aim= document.querySelector("#aim");
  const dreamProject= document.querySelector("#dreamProject");

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    addDoc(colRef,{
        name: name.value,
        dob: dob.value,
        email: email.value,
        curKnowledge: curKnowledge.value,
        aim: aim.value,
        dreamProject: dreamProject.value,
    })
    .then((result)=>{
        form.reset()
        alert("Your data has been successfully saved in the database. ")
    })
    .catch((err) =>{
        alert(err)
    })
  })
