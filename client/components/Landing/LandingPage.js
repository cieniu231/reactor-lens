import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="http://localhost:9090/images/carousel-img/paris.jpg" alt="Paris" />
                <img src="http://localhost:9090/images/carousel-img/dubrovnik.jpg" alt="Dubrovnik" />
                <img src="http://localhost:9090/images/carousel-img/saintpetersburg.jpg" alt="SaintPetersburg" />
            </div>
        );
    }
}