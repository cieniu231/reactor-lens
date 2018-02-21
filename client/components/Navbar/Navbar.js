import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Icon, Input} from 'semantic-ui-react'

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
                <Grid>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column floated='left' width={5}>
                            <i className="fas fa-bars" onClick={this.props.toggleMenu} style={{marginLeft: 30, fontSize: 22, cursor: 'pointer'}}/>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5} style={{textAlign: 'right'}}>
                            <Link to='city'>
                                <img src="images/logo.png" style={{maxHeight: 70}}
                                     alt="logo"/>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}