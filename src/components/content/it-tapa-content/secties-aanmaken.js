import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class SectiesAanmaken extends React.Component{
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
                            <Header as="h2"color="grey">Secties en pagina's aanmaken, personen toevoegen/verwijderen</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-23 line-spacing text-center">
                                        <br/><br/>
                                        Sectie = verzameling van pagina's waar je de inhoud in zet.<br/>
                                        Sectiegroep = gebundelde secties over hetzelfde onderwerp<br/>
                                        <br/>
                                        Links -> overzicht notitieblokken en inhoud<br/>
                                        Rechts -> pagina's toevoegen<br/>
                                        <br/><br/><br/>
                                        <div className="text-35">Personen toevoegen/verwijderen:</div><br/>
                                            - Tabblad Klasnotitieblok<br/>
                                            - Klik op leerlingen toevoegen en verwijderen<br/>
                                            - Selecteer de klasnotitieblok die je wil beheren<br/>
                                            - Verwijder of voeg leerlingen toe<br/>

                                        <br/><br/>
                                    </div>
                                    <img alt="" className="ui image centered huge" src="img/secties-aanmaken-1.png"/><br/>
                                    <img alt="" className="ui image centered huge" src="img/secties-aanmaken-2.png"/><br/>
                                    <img alt="" className="ui image centered huge" src="img/secties-aanmaken-3.png"/><br/>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}