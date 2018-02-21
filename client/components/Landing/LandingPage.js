import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Divider, Header} from 'semantic-ui-react';
import {CityList} from '../City/CityList';
import {ActivityList} from '../Activity/ActivityList';

export class LandingPage extends React.Component {
    

    render() {
        return (
            <div id="landing-page" style={{marginTop : '20px' }}>
                <div id='carrousel' style={{width : '100%',height : '400px',margin : '20px', overflow : 'hidden', position : 'relative', background : ' linear-gradient(0deg, rgba(61,58,175,1), rgba(0,191,0,0.3)) ,url("images/carousel-img/paris.jpg")'}}>
                    <Header size='huge' style={{position:'absolute', color : 'white', top: '50%', left : '50%' , textTransform : 'uppercase', fontSize:'44pt', transform :'translate(-50%, -50%)', borderBottom : 'solid 5px white', paddingBottom : '10px', zIndex : '1',}}>
                        Click. Connect. Explore.
                    </Header>
                </div>

                <Divider horizontal style={{marginTop : '30px', fontSize : '20pt', color: '#00bf00'}}>Last activities added</Divider>
                <ActivityList style={{justifyContent: 'center', alignContent : 'center'}}/>
                <Divider horizontal style={{marginTop : '30px', fontSize : '20pt', color: '#3d3aaf'}}>Last cities added</Divider>
                <CityList style={{justifyContent: 'center', alignContent : 'center'}}/>
             
            </div>
        );
    }
}