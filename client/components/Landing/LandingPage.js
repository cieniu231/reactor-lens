import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="landing-page">
                <div id="search-container">
                    <div id="search-overlay">
                        <h1>Discover cities</h1>
                    </div>
                    <img src="images/carousel-img/paris.jpg" alt="Paris" />
                </div>
                <div id="last-events">
                    <p>3 more recents cities added to database</p>
                </div>
                <div id="last-cities">
                    <p>3 more recents events added to database</p>
                </div>
            </div>
        );
    }
}