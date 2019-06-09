import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class HoeGebruikenOneNote extends React.Component{
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
                            <Header as="h2"color="grey">Hoe gebruik je OneNote? Uitleg notitieblok aanmaken.</Header>
                            <Divider/>
                                    <div className="font-arial text-17 line-spacing text-center side-padding">
                                        <br/><br/>
                                        <div className="text-35">Hoe gebruik je OneNote?</div><br/>
                                        Standaard heb je al een notitieblok als je je voor het eerst aanmeld in OneNote met al één notitie. Je kan hier schrijven 
                                        of nieuwe notities toevoegen, …<br/>
                                        Je kan ook zelf een nieuwe notitieblok aanmaken. <br/>
                                            - Ga naar bestand<br/>
                                            - Nieuw<br/>
                                        Kies waar je wil opslaan. Je kan je nieuwe notitieblok opslaan op OneDrive of lokaal op je pc. We raden je aan om je 
                                        notities best op OneDrive op te slaan zodat je er overal aankan. Hiervoor moet je eerst aangemeld zijn via OneDrive.<br/>
                                        <br/><br/>
                                    </div>
                                    <img alt="" className="ui image centered large" src="img/hoe-gebruiken-onenote.png"/>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}