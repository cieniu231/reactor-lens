import React from "react";
import {Button, Dropdown, Form, Header, Icon, Input, Segment,} from "semantic-ui-react";
import ImagesUploader from 'react-images-uploader';
import {ApiService} from "../../services/ApiService";
import {HTTP_SERVER_PORT_IMAGES} from "../../../server/constants";

export class CityForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            longitude: '',
            latitude: '',
            description: '',
            picture:''
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
            <Segment.Group compact style={{width :'400px',}}>
                <Segment>
                    <Header as='h2' size='medium'>
                        <i className="fas fa-university" style={{marginRight : '5px',}}/>
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
                        <Form.Field control={Input} label='Description' placeholder='Description' name='description'
                                    value={this.state.description} onChange={this.handleInputChange}/>
                        <input id="cityPicture" type="hidden" value=""/>
                        <ImagesUploader
                            label="Upload a Picture for the City"
                            url={HTTP_SERVER_PORT_IMAGES} optimisticPreviews multiple={false}
                            onLoadEnd={(err, pictureFileName) => {
                                if (err) console.error(err);
                                else  {this.setState({picture: pictureFileName})};
                            }}
                        />
                        <Form.Field control={Button} color="blue">Save</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>


        );
    }
}