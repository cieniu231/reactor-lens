import * as React from "react";
import {ApiService} from "../../services/ApiService";
import {Button, Comment, Header, Input, Loader} from "semantic-ui-react";

export class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            text: '',
            author: ''
        };
        this.fetchData();
    }

    fetchData() {
        ApiService.get('/api/comment/forActivityId/' + this.props.activityId)
            .then(comments => this.setState({comments}));
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    renderComments() {
        let {comments} = this.state;
        let commentsComponents = [];

        comments.forEach(item => {
            commentsComponents.push((
                <Comment key={item._id}>
                    <Comment.Avatar src='images/elliot.jpg'/>
                    <Comment.Content>
                        <Comment.Author>{item.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>{new Date(item.date).toLocaleDateString()}, {new Date(item.date).toLocaleTimeString()}</div>
                        </Comment.Metadata>
                        <Comment.Text>{item.text}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action><i className="fas fa-thumbs-up" /> Like</Comment.Action>
                            <Comment.Action><i className="fas fa-share-alt" /> Share</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            ));
        });

        return (<Comment.Group>{commentsComponents}</Comment.Group>);
    }

    render() {
        return (
            <div>
                <Input name='text' value={this.state.text} placeholder='Add a comment...'
                       onChange={this.handleInputChange.bind(this)}/>
                <Input name='author' value={this.state.author} placeholder='Your name...'
                       onChange={this.handleInputChange.bind(this)}/>
                <Button onClick={() => {
                    let {text, author} = this.state;
                    ApiService.post('/api/comment', {
                        activityId: this.props.activityId,
                        text,
                        author
                    }).then(res => this.fetchData());
                }}>
                    Save
                </Button>
                <Header as='h3' dividing>Comments</Header>
                {this.renderComments()}
            </div>
        );
    }
}