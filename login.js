import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const loginForm = document.getElementById('loginForm');
const resultForm = document.getElementById('resultForm');
const entrySection = document.getElementById('entrySection');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginForm.style.display = 'none';
    entrySection.style.display = 'block';
  } catch (err) {
    alert("Login failed: " + err.message);
  }
});

resultForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    class: document.getElementById('class').value,
    roll: document.getElementById('roll').value,
    exam: document.getElementById('exam').value,
    english: +document.getElementById('english').value || 0,
    maths: +document.getElementById('maths').value || 0,
    science: +document.getElementById('science').value || 0,
    grade: document.getElementById('grade').value,
    rank: +document.getElementById('rank').value || null,
  };
  await addDoc(collection(db, "results"), data);
  alert("Result added!");
  resultForm.reset();
});
