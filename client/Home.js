import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Footer} from './components/Footer/Footer'
import {Banner} from "./components/Banner/Banner";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                {this.props.children}
                <Footer/>
            </div>

        );
    }
}

// final version
