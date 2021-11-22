const admin = require("firebase-admin");
const serviceAccout = require('../functions/firebasekey.json');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if(admin.apps.length === 0 ) {
    firebase = admin.initializeApp({
        credential : admin.credential.cert(serviceAccout),
    });
} else{
    firebase = admin.app();
}

module.exports = {
    api : require('../functions/api'),
};