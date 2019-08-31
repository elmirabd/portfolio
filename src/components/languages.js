import React, {Component} from 'react';
import {Cell, Grid, ProgressBar} from "react-mdl";

class Languages extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: 'flex'}}>{this.props.lang} <ProgressBar
                            style={{margin: 'auto', width: '50%'}}
                            progress={this.props.progress} buffer={87}/></div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Languages;