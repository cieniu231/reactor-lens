import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid} from 'semantic-ui-react'
import {FancyLink} from "../FancyLink/FancyLink";
import './Navbar.css';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSearchInput() {
        this.setState({searching: true})
    }

    handleClose() {
        this.setState({searching: false})
    }

    render() {
        return (
            <div className="Navbar">
                <Grid relaxed columns={1}>
                    <Grid.Column style={{paddingBottom: 0}}>
                        <Link to='home' style={{marginLeft: 15, marginRight: 15}}>
                            <img src="images/logo.png" style={{maxHeight: 55}}
                                 alt="logo"/>
                        </Link>
                        <FancyLink url='home' text='Home'/>
                        <FancyLink url='city' text='Cities'/>
                        <FancyLink url='activity' text='Activities'/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

}