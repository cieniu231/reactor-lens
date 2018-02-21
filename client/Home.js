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
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}