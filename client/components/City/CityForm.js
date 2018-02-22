import React from "react";
import {Button, Dropdown, Form, Header, Icon, Input, Segment} from "semantic-ui-react";
import {ApiService} from "../../services/ApiService";

export class CityForm extends React.Component {
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
        ApiService.post('/api/city', this.state)
            .then(content => this.props.closeForm());

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
            <Segment.Group compact style={{width : '600px',}}>
                <Segment>
                    <Header as='h2' size='medium'>
                        <i className="fas fa-university" />
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
                        <Form.Field control={Button} color='blue'>Save</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}