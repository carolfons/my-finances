      
const admin = require("firebase-admin"); // importing firebase admin
require("dotenv").config(); // Carrega as variáveis do arquivo .env

const serviceAccount = require("../finance-control-2e49d-firebase-adminsdk-fbsvc-636257a8c3.json"); // importing service account credentials

// initializing firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// exporting database reference
const db = admin.firestore();
module.exports = {
  db,
};