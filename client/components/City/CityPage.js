import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Header, Container, Image, Loader, Item, Label} from "semantic-ui-react";
import {HTTP_SERVER_PORT} from "../../../server/constants";

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
            <Item key={a._id}>
                <Item.Image src={a.picture}/>

                <Item.Content>
                    <Item.Header as='a'>{a.name}</Item.Header>
                    <Item.Extra>
                        <Label>{a.nature}</Label>
                        {a.nature === 'place' ?
                            <Label icon='globe' content='See more'/>
                            : <Label icon='globe' content='Book a ticket'/>}

                    </Item.Extra>
                </Item.Content>
            </Item>
        )));

        return activities;
    }

    render() {
        let {city} = this.state;
        if (typeof city !== 'undefined') {
            return (
                <div>
                    <Image src={city.picture} size='medium' circular centered/>
                    <Header size='huge' style={{textAlign: 'center'}}>{city.name}<small> ({city.coordinates.long},{city.coordinates.lat})</small></Header>
                    <Container>
                        {city.description}
                    </Container>
                    <Item.Group divided>
                        {this.renderActivities()}
                    </Item.Group>
                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }

    }
}
