import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Inloggen extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-40"})
    }

    showBody() {
        this.setState({bodyClass: "opacity-100"})
    }

    render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} className="opacity-0"/>
                <Grid.Column width={12} className={this.state.bodyClass} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                    <Segment>
                            <Label as="a" color="blue" ribbon>
                                IT Tapa
                            </Label>
                            <Header as="h2"color="grey">Inloggen</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Inloggen</div><br/>
                                        Inloggen met Microsoft account<br/>
                                        Je kan meerdere accounts toevoegen<br/>
                                        Eenmaal je ingelogd bent blijf je altijd ingelogd<br/>
                                        <br/><br/>
                                    </div>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered medium" src="img/inloggen-1.png"/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered medium" src="img/inloggen-3.png"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered medium" src="img/inloggen-2.png"/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered medium" src="img/inloggen-4.png"/>
                                            </Grid.Column>
                                        <Grid.Row>
                                            
                                        </Grid.Row>
                                    </Grid>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}