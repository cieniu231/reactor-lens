import express from 'express';
import imagesUpload from 'images-upload-middleware';
import {MongoClient, ObjectID} from 'mongodb';
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
    db.collection('cities').find({})
        .toArray((err, docs) => {
            return res.status(200).json(docs);
        });
});

app.get('/api/city/:id', (req, res) => {
    db.collection('cities').findOne({"_id": ObjectID(req.params.id)})
        .then(city => res.status(200).json(city))
        .catch(error => {
            res.status(404).json({message: `No such city with id : ${req.params.id}`});
        });
});

app.get('/api/activity', (req, res) => {
    db.collection('activities').find({}).sort({ "$natural": -1 })
        .toArray((err, docs) => {
            return res.status(200).json(docs);
        });
});

app.get('/api/activity/:id', (req, res) => {
    db.collection('activities').findOne({"_id": ObjectID(req.params.id)})
        .then(city => res.status(200).json(city))
        .catch(error => {
            res.status(404).json({message: `No such activity with id : ${req.params.id}`});
        });
});

app.post('/api/activity', (req, res) => {
    db.collection('activities').insertOne(req.body, (error, result) => {
        res.status(error ? 500 : 200).json(error ? error : result);
    });
});

app.delete('/api/activity/:id', (req, res) => {
    db.collection('activities').deleteOne({"_id": ObjectID(req.params.id)})
        .then(city => res.status(200).json(city))
        .catch(error => {
            res.status(404).json({message: `No such activity with id : ${req.params.id}`});
        });
});

// app.use('/api/things', require('./api/thing'));

