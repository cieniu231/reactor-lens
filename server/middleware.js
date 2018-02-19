import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import bodyParser from 'body-parser';

export function middleware(app) {
    app.use(express.static(__dirname + '/../static'));
    app.use(bodyParser.json());
    app.use(corsPrefetch);
}