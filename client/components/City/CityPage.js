import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Header, Container, Image, Loader, Item, Label} from "semantic-ui-react";
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {Link} from "react-router";

export class CityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: void 0
        }
    }

    componentDidMount() {
        fetch(HTTP_SERVER_PORT + '/api/city/' + this.props.params.id)
            .then(data => data.json())
            .then(city => this.setState({city}))
    }

    renderActivities() {
        let activities = [];

        (this.state.city.activities || []).forEach(a => activities.push((
            <Link key={a._id} to={'activity/' + a._id}>
                <Item>
                    <Item.Image src={a.picture} size='small'/>

                    <Item.Content>
                        <Item.Header as='a'>{a.name}</Item.Header>
                        <Item.Extra>
                            <Label style={{textTransform:'capitalize'}}>{a.nature}</Label>
                            {a.nature === 'place' ?
                                <Label icon='globe' content='See more'/>
                                : <Label icon='globe' content='Book a ticket'/>}

                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Link>
        )));

        return activities;
    }

    render() {
        let {city} = this.state;
        if (typeof city !== 'undefined') {
            return (
                <div>
                    <Container className='city_description'>
                    <Image src={city.picture} size='medium' circular centered/>
                    <Header style={{textAlign:'center',}} className='CityName' size='huge'>{city.name}
                        <i className='fas fa-compass'/><small>({city.coordinates.long},{city.coordinates.lat})</small>
                    </Header>

                    <Container style={{fontSize :'12pt',}}>
                        {city.description}
                    </Container>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent :'center', alignContent :'center', marginTop : '50px',}}>
                        {this.renderActivities()}
                    </div>
                    </Container>
                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }

    }
}
