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
                            Click. Connect. Explore.
                        </Header>
                    </div>
                    <figure style={{position : 'relative', width : '500%', margin : '0', padding :'0', fontSize : '0',}}>
                    <img src="images/carousel-img/paris.jpg" alt="Paris" style={{height : '400px', width : '100%',}} />
                    <img src="images/carousel-img/dubrovnik.jpg" alt="Paris" style={{height : '400px', width : '100%',}} />
                    <img src="images/carousel-img/saintpetersburg.jpg" alt="Paris" style={{height : '400px', width : '100%',}} />

                    </figure>
                </div>
                <Divider horizontal>Last cities added</Divider>
                <CityList style={{justifyContent: 'center', alignContent : 'center'}}/>
             
            </div>
        );
    }
}