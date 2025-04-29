const admin = require('firebase-admin'); // importing firebase admin
const serviceAccount = require('../finance-control-2e49d-firebase-adminsdk-fbsvc-1567e77d87.json'); // importing service account key

// initializing firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://finance-control-2e49d-default-rtdb.firebaseio.com'
});

// exporting database reference
const db = admin.database();
module.exports = {
  db,
};