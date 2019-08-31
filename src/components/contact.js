import React from 'react';
import {Grid, Cell, List , ListItem, ListItemContent} from "react-mdl";


function Contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2 style={{fontFamily: "Anton"}}>Elmir Abdurahimov</h2>
                    <img src={require('../media/elmir.jpg')} alt="avatar"
                         style={{height: "250px", borderRadius: "20%"}}/>
                    <p style={{width:"75%" , margin: "auto" , paddingTop: "1em"}}>Hello! This is a generator for text fonts of the "cool" variety. I noticed people were trying to
                        find a generator like fancy letters, but were ending up on actual font sites rather than
                        generators of copy-paste text like this one. So currently this is basically a duplicate of the
                        above, but I think I'll try to collect a few more "cool" text fonts, like the old enlgish one,
                        and specialise this a bit.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" arial-hidden="true"> (+994)70 800 66 40</i>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" arial-hidden="true"> elmir.abdurahimov@gmail.com</i>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" arial-hidden="true"> elmir.abdurahimov</i>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily:'Anton'}}>
                                    <i className="fa fa-facebook-square" arial-hidden="true"> elmir.abdurahimov</i>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>

        </div>
    );
}

export default Contact;