import React from "react";
import {Header, Segment, Grid, Divider, Label, Button} from "semantic-ui-react";

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
                            <div className="font-advent-pro text-25 line-spacing text-center side-padding">
                                <br/><br/>
                                <div className="text-35">Overzicht IT-tapa</div><br/><br/><br/>
                                OneNote + klasnotitieblokken<br/>
                                OneNote is een handige notitietool van Microsoft die je zowel lokaal op je eigen PC maar ook op OneDrive kan gebruiken 
                                en door vele "onderwijs-professionals" (alsook in de bedrijfswereld) wordt gebruikt. Tijdens het eerste deel van de sessie 
                                wordt u wegwijs gemaakt in de mogelijkheden die OneNote biedt om notities te maken en onder te verdelen. In het tweede deel 
                                gebruiken we de klasnotitie-plugin waarmee u als leerkracht(en team) de notities van uw leerlingen mee vorm kunt geven.
                                <br/><br/><br/>
                                <Button color="orange" basic onClick={this.props.selectWatIsOneNote}>Wat is OneNote? Werking, synchroniseren, informatie van overal bereikbaar,…</Button>
                                <br/><br/>
                                <Button color="yellow" basic onClick={this.props.selectWatMetOneNoteDoen}>Wat kan je met OneNote doen? Voordelen van OneNote? Waarom zou je OneNote gebruiken? Delen met anderen?</Button>
                                <br/><br/>
                                <Button color="olive" basic onClick={this.props.selectWaarOneNoteGebruiken}>Waar kunnen we OneNote gebruiken?</Button>
                                <br/><br/>
                                <Button color="green" basic onClick={this.props.selectVerschilOneNoteEnOneNote2016}>Verschil OneNote en OneNote 2016</Button>
                                <br/><br/>
                                <Button color="teal" basic onClick={this.props.selectPersoonlijkeNotitieblok}>Persoonlijke notitieblok</Button>
                                <br/><br/>
                                <Button color="blue" basic onClick={this.props.selectInloggen}>Inloggen tonen en laten doen</Button>
                                <br/><br/>
                                <Button color="violet" basic onClick={this.props.selectHoeGebruikenOneNote}>Hoe gebruik je OneNote? Uitleg notitieblok aanmaken</Button>
                                <br/><br/>
                                <Button color="purple" basic onClick={this.props.selectUitlegOpmaakUitlijning}>Uitleg opmaak en uitlijning</Button>
                                <br /><br/>
                                <Button color="pink" basic onClick={this.props.selectKlasnotitieblokDownloaden}>Klasnotitieblok OneNote downloaden/ hoe het werkt/ wat je ermee kan doen/..</Button>
                                <br/><br/>
                                <Button color="brown" basic onClick={this.props.selectSectiesAanmaken}>Sectie's en pagina's aanmaken, personen toevoegen/verwijderen</Button>
                                <br/><br/>
                                <Button color="grey" basic onClick={this.props.selectLinksDistribueren}>Links naar andere pagina's, distribueren naar alle/specifieke personen</Button>
                                <br/><br/>
                                <Button color="black" basic onClick={this.props.selectTipsTricks}> basicTips + Tricks bv. Quick notes (= win. Toets + n)</Button>
                                <br/><br/><br/>
                            </div>
                            <div className="youtube-embed">
                                <iframe frameBorder="0" allowFullScreen title="aa" height="1315" width="420" src="https://youtube.com/embed/ERBYLiQB4H8">
                                </iframe>
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