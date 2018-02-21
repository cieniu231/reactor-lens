import React from "react";
import {Breadcrumb, Button, Dimmer, Grid, Icon} from "semantic-ui-react";
import {ActivityForm} from "./ActivityForm";
import {ActivityList} from "./ActivityList";
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {ApiService} from "../../services/ApiService";

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
        ApiService.get('/api/activity')
            .then(activities => this.setState({activities}));
    }

    removeActivity(id) {
        ApiService.remove('/api/activity/' + id)
            .then(content => this.fetchData());
    }

    render() {
        return (
            <div className="ActivityPage">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><i className='fas fa-plus'/> Add</Button>
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