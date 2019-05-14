import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class ITTapa extends React.Component{
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
                            <Header as="h2"color="grey">IT Tapa</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Overzicht IT-tapa</div><br/>
                                        OneNote + klasnotitieblokken<br/>
                                        OneNote is een handige notitietool van Microsoft die je zowel lokaal op je eigen PC maar ook op OneDrive kan gebruiken 
                                        en door vele "onderwijs-professionals" (alsook in de bedrijfswereld) wordt gebruikt. Tijdens het eerste deel van de sessie 
                                        wordt u wegwijs gemaakt in de mogelijkheden die OneNote biedt om notities te maken en onder te verdelen. In het tweede deel 
                                        gebruiken we de klasnotitie-plugin waarmee u als leerkracht(enteam) de notities van uw leerlingen mee vorm kunt geven.
                                        <br/><br/><br/>
                                        <a href="/wat-is-onenote">- Wat is OneNote? Werking, synchroniseren, informatie van overal bereikbaar,…<br/></a>
                                        <a href="/wat-kan-je-met-onenote-doen">- Wat kan je met OneNote doen? Voordelen van OneNote? Waarom zou je OneNote gebruiken? Delen met anderen?<br/></a>
                                        <a href="/waar-kunnen-we-onenote-gebruiken">- Waar kunnen we OneNote gebruiken?<br/></a>
                                        <a href="/verschil-onenote-en-onenote-2016">- Verschil OneNote en OneNote 2016<br/></a>
                                        <a href="/persoonlijke-notitieblok">- Persoonlijke notitieblok<br/></a>
                                        <br/>
                                        <a href="/inloggen">- Inloggen tonen en laten doen<br/></a>
                                        <a href="/hoe-gebruik-je-onenote">- Hoe gebruik je OneNote? Uitleg notitieblok aanmaken.<br/></a>
                                        <a href="/uitleg-opmaak-uitlijning">- Uitleg opmaak en uitlijning<br/></a>
                                        <br/>
                                        <a href="/klasnotitieblok-downloaden">- Klasnotitieblok OneNote downloaden/ hoe het werkt/ wat je ermee kan doen/..<br/></a>
                                        <a href="/secties-aanmaken">- Sectie's en pagina's aanmaken, personen toevoegen/verwijderen<br/></a>
                                        <a href="/links-naar-pagina-distribueren-personen">- Links naar andere pagina's, distribueren naar alle/specifieke personen<br/></a>
                                        <a href="/tips-tricks">- Tips + Tricks bv. Quick notes (= win. Toets + n)<br/></a><br/><br/>
                                    </div>
                                    <video className="video-center" width="60%" controls>
                                        <source src="/video/OneNoteTutorial.mp4" type="video/mp4"></source>
                                    </video>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} classNameName="opacity-0"/>
            </Grid>
            
        )
    }
}