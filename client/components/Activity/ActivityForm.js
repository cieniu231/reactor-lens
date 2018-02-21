import React from "react";
import {Button, Dropdown, Form, Header, Icon, Input, Segment} from "semantic-ui-react";
import {HTTP_SERVER_PORT} from "../../../server/constants";

export class ActivityForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            url: '',
            nature: ''
        };

        this.handleSubmit = this.handleSubmit
            .bind(this);
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(HTTP_SERVER_PORT + '/api/activity', {
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
                        <i className='fas fa-cube'/>
                        <Header.Content>
                            Add activity
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field control={Input} label='Name' placeholder='Name'
                                    name='name' value={this.state.name} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Description' placeholder='Description' name='description'
                                    value={this.state.description} onChange={this.handleInputChange}/>
                        <Form.Field control={() => {
                            let options = [
                                {key: 'event', value: 'event', text: 'Event'},
                                {key: 'place', value: 'place', text: 'Place'}
                            ];

                            return (
                                <Dropdown placeholder='Nature'
                                          onChange={(e, data) => this.setState({nature: data.value})}
                                          search selection options={options}/>
                            );
                        }} label='Nature' placeholder='Nature' name='nature' value={this.state.nature}/>
                        <Form.Field control={() => <Input label='http://'/>} label='URL' placeholder='URL' name='url'
                                    value={this.state.url} onChange={this.handleInputChange}/>
                        <Form.Field control={Button}>Save</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}