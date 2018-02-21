import React from "react";
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {Container, Header, Image, Loader} from "semantic-ui-react";
import {ApiService} from "../../services/ApiService";
import {CommentList} from "../Comment/CommentList";

export class SingleActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: void 0
        }
    }

    componentDidMount() {
        ApiService.get('/api/activity/' + this.props.params.id)
            .then(activity => this.setState({activity}));
    }

    render() {
        let {activity} = this.state;
        if (typeof activity !== 'undefined' && activity !== null) {
            return (
                <div>
                    <Image src={activity.picture} size='medium' circular centered/>
                    <Header size='huge' style={{textAlign: 'center'}}>{activity.name}
                        {/*<small> ({activity.coordinates.long},{activity.coordinates.lat})</small>*/}
                    </Header>
                    <Container>
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