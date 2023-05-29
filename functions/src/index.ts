import {https, logger} from "firebase-functions";
import {applicationDefault, initializeApp} from "firebase-admin/app";
export const app = initializeApp({
  credential: applicationDefault(),
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = https.onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
