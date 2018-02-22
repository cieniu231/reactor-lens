import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Divider, Header} from 'semantic-ui-react';
import {CityList} from '../City/CityList';
import {ActivityList} from '../Activity/ActivityList';
import {ApiService} from "../../services/ApiService";

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
                <div id='carrousel' style={{width : '100%',height : '400px', overflow : 'hidden', position : 'relative', background : ' linear-gradient(0deg, rgb(14, 14, 14), rgba(206, 206, 206, 0.3)), url(images/carousel-img/paris.jpg)'}}>
                    <Header size='large' style={{position:'absolute', color : 'white', top: '50%', left : '50%' , textTransform : 'uppercase', fontSize:'38pt', transform :'translate(-50%, -50%)', borderBottom : 'solid 5px white', paddingBottom : '10px', zIndex : '1',}}>
                        Click. Connect. Explore.
                    </Header>
                </div>
                <Divider horizontal style={{marginTop : '30px', fontSize : '20pt', color: '#00bf00'}}>Last activities added</Divider>
                <ActivityList style={{justifyContent: 'center', alignContent : 'center'}}/>
                <Divider horizontal style={{marginTop : '30px', fontSize : '20pt', color: '#3d3aaf'}}>Last cities added</Divider>
                <CityList cities={this.state.cities || []} style={{justifyContent: 'center', alignContent : 'center'}}/>
             
            </div>
        );
    }
}