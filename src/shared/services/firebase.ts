import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBnBo6772DwYey7G98LyGwm3DX0PwPCvlg',
  authDomain: 'w-clo-d9dae.firebaseapp.com',
  projectId: 'w-clo-d9dae',
  storageBucket: 'w-clo-d9dae.firebasestorage.app',
  messagingSenderId: '97990210837',
  appId: '1:97990210837:web:396957cb79730baeb2e51c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
