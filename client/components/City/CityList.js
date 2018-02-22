import {Card, Loader, Button, Image} from "semantic-ui-react";
import React from "react";
import {Link} from 'react-router';

export class CityList extends React.Component {
    renderCitiesList() {
        let {cities} = this.props;
        let citiesComponents = [];

        cities.forEach(c => {
            citiesComponents.push((<div key={c._id}>
                <Card style={{marginLeft: '15px', marginRight: '15px', border: '1px solid #3d3aaf'}}>
                    <Card.Content>
                        <Image src={c.picture}/>
                        <Card.Header style={{paddingTop: '20px',}}>
                            {c.name}
                        </Card.Header>
                        <Card.Meta>
                            {(c.coordinates || {}).long + ', ' + (c.coordinates || {}).lat}
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={'city/' + c._id}>
                            <Button basic color='green' className='CityButton'>Go to city</Button>
                        </Link>
                        <Button basic color='red' onClick={() => this.props.removeCity(c._id)}>Remove</Button>
                    </Card.Content>
                </Card>


            </div>))
        });
        
        return (<div className="cityList"
                     style={{display: 'flex', flexWrap: 'wrap', marginTop: 40}}>
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