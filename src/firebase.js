import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDoFnDKtXFj4sYTCRmtZLIrtHfUfYtBxUI',
  authDomain: 'ismlrp-auth-dev-fddb3.firebaseapp.com',
  databaseURL:
    'https://ismlrp-auth-dev-fddb3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ismlrp-auth-dev-fddb3',
  storageBucket: 'ismlrp-auth-dev-fddb3.appspot.com',
  messagingSenderId: '461713266912',
  appId: '1:461713266912:web:37b4a5d05fac4e1f01d885',
});

export const auth = app.auth();
export default app;
