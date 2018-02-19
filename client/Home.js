import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My Cities... The places to be!</h1>
                <p> You can find in this website many cities with beautiful places, events (festivals, concerts and so on).
                    Please, join us, and you will have the possibilities to participate to this new social network. <br />
                    Enjoy!!
                </p>
            </div>
        );
    }
}
