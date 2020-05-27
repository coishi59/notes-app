const mongoose = require('mongoose')
require('dotenv').config();

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DB} = process.env;
const mongoconn = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DB}`

mongoose.connect(mongoconn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

})
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));