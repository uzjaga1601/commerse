import { initializeApp  } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC1l9kC3KJqaJ2HoV-bI27aNRi1i99J15I",
    authDomain: "e-commerse-87931.firebaseapp.com",
    projectId: "e-commerse-87931",
    storageBucket: "e-commerse-87931.appspot.com",
    messagingSenderId: "650960292625",
    appId: "1:650960292625:web:515fcd0fe2fd4afd27dab0"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}