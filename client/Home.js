import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Footer} from './components/Footer/Footer'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>

        );
    }
}