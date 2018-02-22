import React from 'react';
import {Header} from 'semantic-ui-react';


export class Banner extends React.Component {
    render () {
        return (

            <div id='carrousel' style={{width : '100%',height : '400px', overflow : 'hidden', position : 'relative', background : ' linear-gradient(0deg, rgb(14, 14, 14), rgba(206, 206, 206, 0.3)), url(images/carousel-img/paris.jpg)', marginBottom : '25px',}}>
                <Header size='large' style={{position:'absolute', color : 'white', top: '50%', left : '50%' , textTransform : 'uppercase', fontSize:'38pt', transform :'translate(-50%, -50%)', borderBottom : 'solid 5px white', paddingBottom : '10px', zIndex : '1',}}>
                    Click. Connect. Explore.
                </Header>
            </div>
        );
    }
}