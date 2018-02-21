import React from "react";
import {Breadcrumb, Button, Dimmer, Grid, Icon} from "semantic-ui-react";
import {ActivityForm} from "./ActivityForm";
import {ActivityList} from "./ActivityList";
import {HTTP_SERVER_PORT} from "../../../server/constants";

export class ActivityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creating: false,
            activities: []
        };
        this.fetchData();
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({creating: true});
    }

    handleClose() {
        this.setState({creating: false});
        this.fetchData();
    }

    fetchData() {
        fetch(HTTP_SERVER_PORT + '/api/activity')
            .then(data => data.json())
            .then(activities => this.setState({activities}))
    }

    removeActivity(id) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(HTTP_SERVER_PORT + '/api/activity/' + id, {
            method: 'DELETE',
            headers: headers
        })
            .then(res => res.json())
            .then(content => {
                this.fetchData();
                // toast.success('Zlecenie ' + content.name + ' został pomyślnie dodany');
            })
            .catch(err => {
                // toast.error(err.message);
            });
    }

    render() {
        return (
            <div className="ActivityPage">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            {/*<Icon name='marker'/>*/}
                            {/*<Breadcrumb icon='right angle' sections={this.sections} />*/}
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><Icon name='plus'/> Dodaj</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Dimmer active={this.state.creating} onClickOutside={this.handleClose} page>
                    <ActivityForm closeForm={this.handleClose.bind(this)} />
                </Dimmer>

                <ActivityList activities={this.state.activities} removeActivity={this.removeActivity.bind(this)}/>
            </div>
        )
    }
}