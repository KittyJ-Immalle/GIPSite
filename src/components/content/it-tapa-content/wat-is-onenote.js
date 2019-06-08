import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class WatIsOneNote extends React.Component{
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
                            <Header as="h2"color="grey">Wat is OneNote? Werking, synchroniseren, informatie van overal bereikbaar,…</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-23 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Wat Is OneNote?</div><br/>
                                        Programma van Microsoft Office <br/>
                                        Digitaal notitieblok<br/>
                                        Notities worden automatisch gesynchroniseerd, je hebt ze altijd en overal bij<br/>
                                        <br/><br/>
                                    </div>
                                    <img alt="" className="ui image centered large" src="img/wat-is-onenote.png"/>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}