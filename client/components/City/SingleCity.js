import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Header, Container, Image, Loader, Item, Label, Input, Dimmer, Button} from "semantic-ui-react";
import {Link} from "react-router";
import {ApiService} from "../../services/ApiService";
import {browserHistory} from 'react-router';
import {ActivityForm} from "../Activity/ActivityForm";
import {Banner} from '../Banner/Banner';


export class SingleCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: void 0,
            creating: false
        };
        this.fetchData();
    }

    fetchData() {
        ApiService.get('/api/city/' + this.props.params.id)
            .then(city => this.setState({city}));
    }

    handleOpen() {
        this.setState({creating: true});
    }

    handleClose() {
        this.setState({creating: false});
        this.fetchData();
    }

    removeCity(id) {
        ApiService.remove('/api/city/' + id)
            .then(() => this.props.router.push('/city'));
    }


    render() {
        let {city, creating} = this.state;
        if (typeof city !== 'undefined' && city !== null) {
            return (
                <div>
                    <Dimmer active={creating} onClickOutside={this.handleClose.bind(this)} page>
                        <ActivityForm closeForm={this.handleClose.bind(this)} cityId={city._id}/>
                    </Dimmer>

                    <Image src={city.picture} size='medium' circular centered/>
                    <Header style={{textAlign: 'center'}} className='CityName' size='huge'>
                        {city.name}
                    </Header>
                    <Header style={{textAlign: 'center', marginTop: '5px'}} size='small'>
                        <i className='fas fa-compass' style={{fontSize: '16pt', marginRight: '10px',}}/>
                        ( Longitude : {city.coordinates.long}, Latitude : {city.coordinates.lat})
                    </Header>

                    <Container style={{fontSize: '12pt', lineHeight: '1.4',}}>
                        {city.description}
                    </Container>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                        <Button basic onClick={this.handleOpen.bind(this)}>Add Activity</Button>
                        <Button basic color='red' onClick={() => this.removeCity(city._id)}>Remove city</Button>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: '50px',
                    }}>
                        {this.renderActivities()}
                    </div>
                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }

    renderActivities() {
        let activities = [];

        (this.state.city.activities || []).forEach(a => activities.push((
            <Link className='ActivityCard' style={{margin: '15px',}} key={a._id} to={'activity/' + a._id}>
                <Item>
                    <Item.Image src={a.picture} size='small'/>

                    <Item.Content>
                        <Item.Header className='ActivityTitle' style={{
                            textAlign: 'center',
                            color: 'black',
                            textTransform: 'capitalize',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        }}>{a.name}</Item.Header>
                        <Item.Extra>
                            <Label style={{textTransform: 'capitalize'}}>{a.nature}</Label>
                            {a.nature === 'place' ?
                                <Label>
                                    <i className='fas fa-globe' style={{fontSize: '12pt', marginRight: '5px',}}/>
                                    See more
                                </Label>
                                : <Label>
                                    <i className='fas fa-globe' style={{fontSize: '12pt', marginRight: '5px',}}/>
                                    Book a Ticket
                                </Label>}

                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Link>
        )));

        return activities;
    }
}


