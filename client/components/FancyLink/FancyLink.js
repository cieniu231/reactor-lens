import * as React from "react";
import './FancyLink.css';
import {Link} from "react-router";

export class FancyLink extends React.Component {
    render() {
        return (
            <div className="FancyLink">
                <Link to={this.props.url}>{this.props.text}</Link>
            </div>
        );
    }

}