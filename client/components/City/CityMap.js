import React from 'react';
import GoogleMapReact from 'google-map-react';

export class GoogleMaps extends React.Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: [YOUR_KEY] }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        );
    }
}