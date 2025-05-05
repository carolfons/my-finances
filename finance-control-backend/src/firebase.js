      
const admin = require("firebase-admin"); // importing firebase admin
require("dotenv").config(); // Carrega as variáveis do arquivo .env

//const serviceAccount = require("../finance-control-2e49d-firebase-adminsdk-fbsvc-636257a8c3.json"); // importing service account credentials

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: firebasePrivateKey,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};
// initializing firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// exporting database reference
const db = admin.firestore();
module.exports = {
  db,
};