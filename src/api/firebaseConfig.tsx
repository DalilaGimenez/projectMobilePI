import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC5AFA9gu94de9jY7vHUu0qT9Gmcg8AUJc', // Correspondente a "api_key"
  authDomain: 'pets-hosts.firebaseapp.com', // Você deve definir o seu domínio de autenticação
  projectId: 'pets-hosts', // Correspondente a "project_id"
  storageBucket: 'pets-hosts.appspot.com', // Correspondente a "storage_bucket"
  messagingSenderId: '1047533008019', // Correspondente a "project_number"
  appId: '1:1047533008019:android:dbfe750219155503bfc966', // Correspondente a "mobilesdk_app_id" para Android
};


// Inicializando Firebase
const app = initializeApp(firebaseConfig);

