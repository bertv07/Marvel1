        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

        import {
            getAuth,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            onAuthStateChanged,
            signOut    
        } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDg-4aONWv9D5Uy-vEAg45l6TekQ0XTsxI",
          authDomain: "marvel-4999c.firebaseapp.com",
          projectId: "marvel-4999c",
          storageBucket: "marvel-4999c.firebasestorage.app",
          messagingSenderId: "546642462521",
          appId: "1:546642462521:web:1cab8cb9ef7d217b704ae8",
          measurementId: "G-6XKJ48CBYC"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);

        const registroForm = document.getElementById('registroForm');
        registroForm.addEventListener('submit', (e =>{
            e.preventDefault()
            const email = document.getElementById('emailRegistro').value;
            const password = document.getElementById('passwordRegistro').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Usuario registrado: ',user)
                })
                .catch((error) => {
                    console.error('No ha sido posible registrarse')
                    console.log(password.value)
                })
        }));

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e =>{
            e.preventDefault()
            const email = document.getElementById('emailLogin').value;
            const password = document.getElementById('passwordLogin').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('El usuario ha iniciado sesion: ',user)
                })
                .catch((error) => {
                    console.error('No ha sido posible iniciar sesion')
                })
        }));

        const logoutButon = document.getElementById('cerrarSesion')
        logoutButon.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    console.log("El cerrado sesion")
                })
                .catch((error => {
                    console.error("No ha sido posible cerrar sesion")
                }))
        });
        onAuthStateChanged(auth, (user) => {
            if (user){
               new  Notification("Bienvenido")
               document.getElementById('auth').style.display = 'none'
               document.getElementById('content').style.display = 'block'
            }else{
               new  Notification("Inicia sesion")
               document.getElementById('auth').style.display = 'block'
               document.getElementById('content').style.display = 'none'
            }
        })






        
//imicio

const container = document.getElementById('auth');
const  registerBtn = document.getElementById('register')
const  loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})