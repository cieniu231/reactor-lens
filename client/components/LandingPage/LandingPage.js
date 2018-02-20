import React from 'react';
import {Button, Segment, Divider} from 'semantic-ui-react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="..." alt="First slide" />
                    </div>
                    <CarouselItem />
                    <CarouselItem />
                </div>
            </div>
        );
    }
}

class CarouselItem extends React.Component {
    render(){
        return(
            <div class="carousel-item">
                <img class="d-block w-100" src="https://cdn.stocksnap.io/img-thumbs/960w/K5CXXZEVUX.jpg" alt="First slide" />
            </div>
        );
    }
    
}