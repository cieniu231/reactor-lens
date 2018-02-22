import React from "react";
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {Button, Container, Header, Image, Loader} from "semantic-ui-react";
import {ApiService} from "../../services/ApiService";
import {CommentList} from "../Comment/CommentList";
import {Banner} from '../Banner/Banner';

export class SingleActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: void 0
        };

        ApiService.get('/api/activity/' + this.props.params.id)
            .then(activity => this.setState({activity}));
    }

    removeCity(id) {
        ApiService.remove('/api/city/' + id)
            .then(() => this.props.router.push('/city'));
    }

    render() {
        let {activity} = this.state;
        if (typeof activity !== 'undefined' && activity !== null) {
            return (
                <div>
                    <Image src={activity.picture || activity.pictures[0]} size='medium' circular centered/>
                    <Button basic color='red' onClick={() => this.removeCity(activity._id)}>Remove</Button>
                    <div>
                        <Header className='Activity' size='huge' style={{
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            paddingBottom: '50px'
                        }}>{activity.name}</Header>
                    </div>
                    <Container style={{fontSize: '12pt',}}>
                        {activity.description}
                    </Container>
                    <CommentList activityId={activity._id}/>
                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}