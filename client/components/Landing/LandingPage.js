import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Divider, Header} from 'semantic-ui-react';
import {CityList} from '../City/CityList';
import {ActivityList} from '../Activity/ActivityList';
import {ApiService} from "../../services/ApiService";
import {Banner} from '../Banner/Banner';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
        ApiService.get('/api/city')
            .then(cities => this.setState({cities}));
    }

    render() {
        return (
            <div id="landing-page" style={{marginTop : '20px' }}>
                <Divider horizontal style={{marginTop : '30px', fontSize : '20pt', color: 'black'}}>Last cities added</Divider>
                <CityList cities={this.state.cities || []} style={{justifyContent: 'center', alignContent : 'center'}}/>
            </div>
        );
    }
}