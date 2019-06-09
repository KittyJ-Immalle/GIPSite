import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class VerschilOneNoteEnOneNote2016 extends React.Component{
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
                            <Header as="h2"color="grey">Verschil OneNote en OneNote 2016</Header>
                            <Divider/>
                                    <div className="font-arial text-17 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">OneNote</div><br/>
                                        - een nieuwere versie voor windows 10<br/>
                                        - Standaard geïnstalleerd<br/>
                                        - meer tools<br/>
                                        - Features die OneNote 2016 niet heeft:<br/>
                                            ○ Notities bekijken op wanneer je ze het laatst bewerkt hebt<br/>
                                            ○ Favoriete pagina's pinnen aan het start menu<br/>
                                            ○ Tekeningen omzetten in figuren<br/>
                                            ○ …<br/><br/>
                                        <div className="text-35">OneNote 2016</div><br/>
                                        - Originele versie<br/>
                                        - Kan nog belangrijk zijn voor school- en werkomgevingen<br/>
                                        - wordt niet meer bijgewerkt met nieuwe features<br/>
                                        <br/><br/>
                                    </div>
                                    <img alt="" className="ui image centered large" src="img/verschil-onenote-onenote2016.jpg"/>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}