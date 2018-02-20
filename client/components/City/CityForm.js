import React from 'react';
import {Button, Form, Header, Icon, Input, Segment} from 'semantic-ui-react'
import {HTTP_SERVER_PORT} from "../../../server/constants";




class CityForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            coordinates: '',
            description: '',
            activities: '',
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(HTTP_SERVER_PORT + '/api/city/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: headers
        })

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
                            Add New City
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Field control={Input} label='City Name' placeholder='City Name'
                                    name='name' value={this.state.name} onChange={this.handleInputChange}/>

                        <Form.Field control={Input} label='Co-Ordinates' placeholder='Co-Ordinates' name='coordinates'
                                    value={this.state.coordinates} onChange={this.handleInputChange}/>

                        <Form.Field control={Input} label='Description' placeholder='Description' name='description'
                                    value={this.state.description} onChange={this.handleInputChange}/>

                        <Form.Field control={Input} label='Activities' placeholder='Activities' name='activities'
                                    value={this.state.activities} onChange={this.handleInputChange}/>

                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}

export default CityForm;