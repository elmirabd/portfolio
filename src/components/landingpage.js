import React from 'react';
import {Button, Cell, Grid} from "react-mdl";


function Landing() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src ={require('../media/elmir.jpg')} className="image-class" alt="avatar"/>
                    <div className="banner-text">

                        <h1>Elmir Abd</h1>

                        <hr/>

                        <p>HTML/CSS | Java | Spring | JavaScript | React | PL/Sql</p>

                        <div className="social-links">
                            {/*Linkedin*/}
                            <a href="https://www.linkedin.com/in/elmir-abdurahimov-661134182/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            {/*Facebook*/}
                            <a href="https://www.facebook.com/elmir.abdurahimov" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            {/*Youtube*/}
                            <a href="https://www.youtube.com/channel/UCqeHI7Y-_uz11bWXeDczGZw?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                            {/*Github*/}
                            <a href="https://github.com/elmirabd" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>


        </div>
    );
}

export default Landing;