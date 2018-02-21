import {Card, Loader, Button, Dimmer, Image, Icon} from "semantic-ui-react";
import React from "react";
import {Link} from 'react-router';
import {HTTP_SERVER_PORT} from "../../../server/constants";
import {CityForm2} from "./CityForm";


export class CityList extends React.Component {

    renderCitiesList() {
        let {cities} = this.props;
        let citiesComponents = [];

        cities.forEach(c => {
            citiesComponents.push((<div key={c._id}>
                <Card>
                    <Card.Content>
                        <Image src={c.picture}/>
                        <Card.Header>
                            {c.name}
                        </Card.Header>
                        <Card.Meta>
                            {(c.coordinates || {}).long + ', ' + (c.coordinates || {}).lat}
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={'city/' + c._id}>
                            <Button basic color='green'>Go to city</Button>
                        </Link>
                        <Button basic color='red' onClick={() => this.removeCity(c._id)}>Remove</Button>
                    </Card.Content>
                </Card>


            </div>))
        });

        return (<div className="cityList"
                     style={{display: 'flex', flexWrap: 'wrap', marginTop: 40}}>
            {citiesComponents}

        </div>);

    }

    removeCity(id) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(HTTP_SERVER_PORT + '/api/city/' + id, {
            method: 'DELETE',
            headers: headers
        })
            .then(res => res.json())
            .then(content => {
                this.fetchData();
                // toast.success('Zlecenie ' + content.name + ' został pomyślnie dodany');
            })
            .catch(err => {
                // toast.error(err.message);
            });
    }


    render() {
        let {cities} = this.props;

        if (cities.length) {
            return (
                <div>
                    {this.renderCitiesList()}
                </div>);

        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }


    }
}