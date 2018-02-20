import React from 'react';
import {Button, Segment, Divider} from 'semantic-ui-react';
import {Navbar} from './components/Navbar/Navbar';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

// import { toggleIcon } from './custom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div class="slider slider1">
                    <div class="slides">
                        <div class="slide-item item1"><img src="images/carousel-img/paris.jpg" alt=""/></div>
                        <div class="slide-item item2"><img src="images/carousel-img/dubrovnik.jpg" alt=""/></div>
                        <div class="slide-item item3"><img src="images/carousel-img/saintpetersburg.jpg" alt=""/></div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}