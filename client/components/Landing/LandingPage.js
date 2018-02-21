import React from 'react';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {Divider, Header} from 'semantic-ui-react';
import {CityList} from '../City/CityList';

export class LandingPage extends React.Component {
    

    render() {
        return (
            <div id="landing-page" style={{marginTop : '20px' }}>
                <div id="search-container">
                    <div id="search-overlay">
                        <Header style={{position:'absolute', color : 'white', top: '30%', left : '50%' , textTransform : 'uppercase', fontSize:'44pt', transform :'translate(-50%, -50%)', borderBottom : 'solid 5px white', paddingBottom : '10px'}}>
                            Lorem Ipsum dolor sit amet
                        </Header>
                    </div>
                    <img src="images/carousel-img/paris.jpg" alt="Paris" style={{height : '400px', width : '100%'}} />
                </div>
                <Divider horizontal>Last cities added</Divider>
                <CityList style={{justifyContent: 'center', alignContent : 'center'}}/>
             
            </div>
        );
    }
}