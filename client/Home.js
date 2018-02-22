import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpened: false
        }
    }

    render() {
        return (
            <div>
                <Navbar toggleMenu={() => {
                    this.setState({menuOpened: !this.state.menuOpened})
                }}/>
                {this.props.children}
            </div>
        );
    }
}