import {Card, Loader, Button, Image} from "semantic-ui-react";
import React from "react";
import {Link} from 'react-router';

export class CityList extends React.Component {
    renderCitiesList() {
        let {cities} = this.props;
        let citiesComponents = [];

        cities.forEach(c => {
            citiesComponents.push((<Link to={'city/' + c._id} key={c._id}>
                <Card className='CityCard' style={{marginLeft: '15px', marginRight: '15px', border: '1px solid #3d3aaf', marginBottom : '40px',}}>
                    <Card.Content>
                        <Image src={c.picture}/>
                        <Card.Header style={{paddingTop: '20px',}}>
                            {c.name}
                        </Card.Header>
                        <Card.Meta style={{color : 'black'}}>
                            {(c.coordinates || {}).long + ', ' + (c.coordinates || {}).lat}
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </Link>))
        });

        return (<div className="cityList"
                     style={{display: 'flex', flexWrap: 'wrap', marginTop: 40, justifyContent : 'center', alignContent : 'center',}}>
            {citiesComponents}
        </div>);
    }

    render() {
        let {cities} = this.props;

        if (cities && cities.length) {
            return (this.renderCitiesList());
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}