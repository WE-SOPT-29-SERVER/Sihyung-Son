const admin = require("firebase-admin");
const serviceAccout = require('../functions/wesopt29-a589f-firebase-adminsdk-f7jeu-73b28fe4b8.json');
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