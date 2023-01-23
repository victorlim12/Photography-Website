// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const Firebase = initializeApp(firebaseConfig, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});

// eslint-disable-next-line no-unused-vars
const appCheck = initializeAppCheck(Firebase, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_CAPTCHA_KEY),
  isTokenAutoRefreshEnabled: true,
});

export const firestore = getFirestore(Firebase);
