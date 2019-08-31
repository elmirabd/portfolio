import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: "0px"}}>{this.props.workPlace}</h4>
                        <p>{this.props.jobDesc}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Experience;