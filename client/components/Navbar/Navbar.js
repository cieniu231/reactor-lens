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
                    <Grid.Row>
                        <Grid.Column floated='left'>
                            <Icon name='bars' onClick={this.props.toggleMenu}/>
                        </Grid.Column>
                        <Grid.Column floated='left' width={4}>
                            <Link to='city'><img src="http://localhost:9090/images/logo.png" style={{maxHeight: 80}} alt="logo"/></Link>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={8} verticalAlign='middle'>

                            {/*<Popup*/}
                                {/*key={this.getFullUserName()}*/}
                                {/*trigger={<Icon circular inverted color='teal' name='user'/>}*/}
                                {/*header={this.getFullUserName()}*/}
                            {/*/>*/}


                            {/*<Icon circular name='search'/>*/}
                            <Input placeholder='Search' onChange={this.handleSearchInput}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}