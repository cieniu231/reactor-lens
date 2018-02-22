import React from "react";
import {Button, Card, Image, Label, Loader} from "semantic-ui-react";
import {Link} from "react-router";

export class ActivityList extends React.Component {
    renderActivities() {
        let {activities} = this.props;
        let activitiesComponents = [];

        activities.forEach(c => {
            activitiesComponents.push((<Link to={'activity/'+c.id} key={c._id}>
                <Card className='ActivityCard' style={{ margin : '10px',border: '1px solid #3d3aaf'}}>
                    <Card.Content>
                        <Image src={c.picture || c.pictures[0]}/>
                        <Card.Header style={{textTransform : 'capitalize',}}>
                            {c.name}
                        </Card.Header>
                        <Card.Meta style={{marginTop : '15px'}}>
                            <Label className={c.nature === 'event' ? "event-label" : "place-label"} tag style={{textTransform :'capitalize',}}>{c.nature}</Label>
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </Link>
            ))
        });


        return (
            <div>
                <div className="cityList" style={{display: 'flex', flexWrap: 'wrap', marginTop: 40}}>{activitiesComponents}</div>
            </div>
        );
    }

    render() {
        if (this.props.activities && this.props.activities.length) {
            return (this.renderActivities())
        } else {
            return (<Loader indeterminate>Fetching data</Loader>);
        }
    }
}