import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "#000", height: "176px",
                            background: 'url(https://miro.medium.com/max/1024/1*2fpfv8Np1AGdmp2axA9rXQ.png) center / cover'
                        }}>Java Project</CardTitle>
                        <CardText>
                            Java is a legend programming language ... Spring is a perfect...
                        </CardText>
                        <CardActions border>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "#000", height: "176px",
                            background: 'url(https://miro.medium.com/max/1024/1*2fpfv8Np1AGdmp2axA9rXQ.png) center / cover'
                        }}>Java Project</CardTitle>
                        <CardText>
                            Java is a legend programming language ... Spring is a perfect...
                        </CardText>
                        <CardActions border>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "#000", height: "176px",
                            background: 'url(https://miro.medium.com/max/1024/1*2fpfv8Np1AGdmp2axA9rXQ.png) center / cover'
                        }}>Java Project</CardTitle>
                        <CardText>
                            Java is a legend programming language ... Spring is a perfect...
                        </CardText>
                        <CardActions border>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "#000", height: "176px",
                            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'
                        }}>React Project</CardTitle>
                        <CardText>
                            Java is a legend programming language ... Spring is a perfect...
                        </CardText>
                        <CardActions border>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "#000", height: "176px",
                            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'
                        }}>React Project</CardTitle>
                        <CardText>
                            Java is a legend programming language ... Spring is a perfect...
                        </CardText>
                        <CardActions border>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                            <Button colored>Java</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>


                </div>
            )
        } else {
            return (
                <Card shadow={50} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{
                        color: "#000", height: "176px",
                        background: 'url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover'
                    }}>Php Project</CardTitle>
                    <CardText>
                        Java is a legend programming language ... Spring is a perfect...
                    </CardText>
                    <CardActions border>
                        <Button colored>Java</Button>
                        <Button colored>Java</Button>
                        <Button colored>Java</Button>
                        <Button colored>Java</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>)
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                    <Tab>Java</Tab>
                    <Tab>React</Tab>
                    <Tab>Php</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>

            </div>
        );
    }
}

export default Projects;