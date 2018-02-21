import React from "react";
import {Breadcrumb, Button, Dimmer, Grid, Icon} from "semantic-ui-react";
import {CityForm} from "./CityForm";
import {CityList} from "./CityList";
import {ApiService} from "../../services/ApiService";

export class CityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creating: false,
            cities: []
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
        ApiService.get('/api/city')
            .then(cities => this.setState({cities}));
    }

    render() {
        let {city} = this.state;
        if (typeof city !== 'undefined') {
            return (
                <div>
                    <Image src={city.picture} size='medium' circular centered/>
                    <Header style={{textAlign:'center',}} className='CityName'     size='huge'>{city.name}
                        <i className='fas fa-compass'/><small>({city.coordinates.long},{city.coordinates.lat})</small>
                    </Header>

                    <Container style={{fontSize :'12pt',}}>
                        {city.description}
                    </Container>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent :'center', alignContent :'center', marginTop : '50px',}}>
                        {this.renderActivities()}
                    </div>
                </div>
            );
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }

        let {creating, cities} = this.state;
        return (
            <div className="CityPage">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><i className='fas fa-plus'/> Add</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Dimmer active={creating} onClickOutside={this.handleClose} page>
                    <CityForm closeForm={this.handleClose.bind(this)} />
                </Dimmer>

                <CityList cities={cities} removeCity={(id) => {
                    ApiService.remove('/api/city/' + id)
                        .then(() => this.fetchData());
                }}/>
            </div>
        )
    }
}