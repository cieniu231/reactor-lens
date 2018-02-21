import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import {Link} from "react-router";

// https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
// !!!!!!!!!
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
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Navbar toggleMenu={() => this.setState({menuOpened: !this.state.menuOpened})}/>
                            {this.props.children}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div>
        );
    }
}
