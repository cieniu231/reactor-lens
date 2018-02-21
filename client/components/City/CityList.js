import {Card, Loader, Button, Image} from "semantic-ui-react";
import React from "react";
import {Link} from 'react-router';
import {HTTP_SERVER_PORT} from "../../../server/constants";

export class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
    }

    componentDidMount() {
        fetch(HTTP_SERVER_PORT + '/api/city/')
            .then(data => data.json())
            .then(cities => this.setState({cities}))
    }

    renderCitiesList() {
        let {cities} = this.state;
        let citiesComponents = [];

        cities.forEach(c => {
            citiesComponents.push((<div key={c._id}>
                <Card style={{marginLeft : '15px', marginRight : '15px', border : '1px solid #3d3aaf'}}>
                    <Card.Content>
                        <Image src={c.picture}/>
                        <Card.Header style={{paddingTop : '20px',}}>
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
                    </Card.Content>
                </Card>
            </div>))
        });


        return (
            <div>
                <div className="cityList" style={{display: 'flex', flexWrap: 'wrap', marginTop: 40, alignItems: 'center', justifyContent:'center'}}>
                    {citiesComponents}
                </div>
            </div>
        );

    }

    render() {
        let {cities} = this.state;

        if (cities.length) {
            return this.renderCitiesList();
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}