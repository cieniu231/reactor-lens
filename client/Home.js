import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Link} from 'react-router';
import {Navbar} from "./components/Navbar/Navbar";

// https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Link to='city' >s</Link>
                {this.props.children}
            </div>
        );
    }
}
