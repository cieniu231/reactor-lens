import React from "react";
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {Container, Header, Image, Loader} from "semantic-ui-react";
import {ApiService} from "../../services/ApiService";

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
                    <div>
                    <Header className='Activity' size='huge' style={{textAlign: 'center', textTransform :'capitalize', borderBottom : '3px solid #3d3aaf'}}>{activity.name}
                        {/*<small> ({activity.coordinates.long},{activity.coordinates.lat})</small>*/}
                    </Header>
                    </div>
                    <Container>
                        {activity.description}
                    </Container>

                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}