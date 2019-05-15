import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class WatMetOneNoteDoen extends React.Component{
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
                            <Header as="h2"color="grey">Wat kan je met OneNote doen? Voordelen van OneNote? Waarom zou je OneNote gebruiken? Delen met anderen?</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Wat kan je met OneNote doen?</div><br/>
                                        Wat kan je doen?<br/>
                                        - Notities maken en bijhouden<br/>
                                        - Klasblok maken en delen met leerlingen of collega's<br/>
                                        <br/><br/>
                                        Enkele voordelen en waarom gebruiken?:<br/>
                                        - Je kunt alles bijhouden en geraakt niets meer kwijt<br/>
                                        - Altijd toegang tot dezelfde gegevens<br/>
                                        - Geen 10 verschillende documenten maar 1 overzichtelijke notitieblok met alles tezamen<br/>
                                        - Samenwerken<br/>
                                        - Gratis<br/>
                                        - Delen met anderen<br/>
                                    </div>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}