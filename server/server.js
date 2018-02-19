import express from 'express';
import imagesUpload from 'images-upload-middleware';
import {MongoClient} from 'mongodb';
import {SERVER, PORT, HTTP_SERVER_PORT_IMAGES, IMAGES} from './constants';
import {middleware} from "./middleware";

const app = express();

middleware(app);

let db;
MongoClient.connect('mongodb://' + SERVER)
    .then(connection => {
        db = connection.db('dbCities');
        app.listen(PORT, () => console.log('Server Listening on Port 9090'));
    })
    .catch(error => console.log('ERROR:', error));

app.post('/images', imagesUpload(
    './static/' + IMAGES,
    HTTP_SERVER_PORT_IMAGES
));

app.get('/api/city', (req, res) => {
    db.collection('cities').find({}).toArray((err, docs) => {
        return res.status(200).json(docs);
    });
});

// app.use('/api/things', require('./api/thing'));

