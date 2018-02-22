import React from 'react';
import {Button, Segment, Divider} from 'semantic-ui-react';
import {Navbar} from './components/Navbar/Navbar';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Icon, Menu, Sidebar} from "semantic-ui-react";
import {Link} from "react-router";

// import { toggleIcon } from './custom';

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
                <Sidebar.Pushable as={Segment}>

                    <Sidebar as={Menu} animation='push' width='thin' visible={this.state.menuOpened} icon='labeled' vertical inverted>
                        <Link to='home'>
                            <Menu.Item name='home'>
                                <i className="fas fa-home" style={{fontSize: 20, marginBottom: 5, cursor: 'pointer'}} /><br/>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to='city'>
                            <Menu.Item name='gamepad'>
                                <i className="fas fa-university" style={{fontSize: 20, marginBottom: 5, cursor: 'pointer'}}/><br/>
                                City
                            </Menu.Item>
                        </Link>
                        <Link to='activity'>
                            <Menu.Item name='camera'>
                                <i className="fas fa-calendar-alt" style={{fontSize: 20, marginBottom: 5, cursor: 'pointer'}}/><br/>
                                Activity
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher style={{transition : 'all 100ms ease-in-out', marginRight: this.state.menuOpened ? '150px' : '0'}}>
                        <Segment basic className='Side'>
                            <Navbar toggleMenu={() => {
                                if(this.state.menuOpened) {

                                }
                                this.setState({menuOpened: !this.state.menuOpened})
                            }}/>
                            {this.props.children}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}