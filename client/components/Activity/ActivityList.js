import React from "react";
import {Button, Card, Image, Label, Loader} from "semantic-ui-react";
import {Link} from "react-router";

export class ActivityList extends React.Component {
    renderActivities() {
        let {activities} = this.props;
        let activitiesComponents = [];

        activities.forEach(c => {
            activitiesComponents.push((<div key={c._id}>
                <Card>
                    <Card.Content>
                        <Image src={c.picture}/>
                        <Card.Header>
                            {c.name}
                        </Card.Header>
                        <Card.Meta>
                            <Label color={c.nature === 'event' ? 'red' : 'green'} tag>{c.nature}</Label>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={'activity/' + c._id}>
                            <Button basic color='green'>Preview</Button>
                        </Link>
                        <Button basic color='red' onClick={() => this.props.removeActivity(c._id)}>Remove</Button>
                    </Card.Content>
                </Card>
            </div>))
        });


        return (<div className="cityList"
                     style={{display: 'flex', flexWrap: 'wrap', marginTop: 40}}>{activitiesComponents}</div>);
    }

    render() {
        if (this.props.activities && this.props.activities.length) {
            return (this.renderActivities())
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}