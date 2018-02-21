import React from 'react';
import ReactDOM from 'react-dom';


var CityMap = React.createClass({
    componentDidMount: function() {
        var map;
        var latLong = new google.maps.LatLng(-47.888723, 444.675360);
        var options = {
                zoom: 2,
                center: latLong
            },
            map = new google.maps.Map(ReactDOM.findDOMNode(this), options);
    },
    render: function() {
        return(
            <div id="map"><span></span></div>
        );
    }
});



export {CityMap};