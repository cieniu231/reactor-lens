import React from "react";
import {Button, Dropdown, Form, Header, Icon, Input, Segment} from "semantic-ui-react";
import {HTTP_SERVER_PORT} from "../../../server/constants";

export class CityForm2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            longitude: '',
            latitude: ''
        };

        this.handleSubmit = this.handleSubmit
            .bind(this);
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(HTTP_SERVER_PORT + '/api/city', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: headers
        })
            .then(res => res.json())
            .then(content => {
                // toast.success('Zlecenie ' + content.name + ' został pomyślnie dodany');
                this.props.closeForm();
            })
            .catch(err => {
                // toast.error(err.message);
            });

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        return (
            <Segment.Group compact>
                <Segment>
                    <Header as='h2' size='medium'>
                        <Icon name='cube'/>
                        <Header.Content>
                            Add City
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field control={Input} label='Name' placeholder='Name'
                                    name='name' value={this.state.name} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Longitude' placeholder='Longitude' name='longitude'
                                    value={this.state.longitude} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Latitude' placeholder='Latitude' name='latitude'
                                    value={this.state.latitude} onChange={this.handleInputChange}/>
                        <Form.Field control={Button}>Save</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}