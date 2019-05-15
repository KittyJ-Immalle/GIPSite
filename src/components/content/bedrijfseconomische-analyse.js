import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class BedrijfseconomischeAnalyse extends React.Component{
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
                            Analyse
                        </Label>
                        <Header as="h2"color="grey">Bedrijfseconomische Analyse</Header>
                        <Divider/>
                        <div className="font-advent-pro text-25 line-spacing text-center side-padding">
                            <br/><br/>
                            <img alt="" className="ui medium image centered" src="img/logo.png"/>
                            <br/>
                            <a href="https://www.lbit.be/">https://www.lbit.be/</a>
                            <br/><br/>
                            LBit is een bedrijf in Beerse op het adres Hulderakkers 5, 2340 BEERSE. LBit focust zich vooral op het maken 
                            en designen van websites en logo’s. Maar ook fotografie komt hier aan bod. De samenwerking tussen bedrijf en klant 
                            is bij LBit heel belangrijk. Hun missie is om de klant tevreden te stellen en hen te helpen bij het verkrijgen van 
                            een mooie website, logo of foto’s.
                            <br/><br/>
                            LBit is een eenmanszaak met als ondernemingsnummer BE 0636 963 663. Het is terug te vinden in de tertiaire sector 
                            als dienstverlenend bedrijf. LBit heeft maar één ondernemer. Omdat het balanstotaal €350 000 en de netto-omzet €700 000 
                            niet overschrijden, is LBit een micro-onderneming.
                            <br/><br/>
                            Het bedrijf heeft geen leveranciers die fysieke producten leveren maar Cgraphy en Combell leveren diensten voor het bedrijf. 
                            Cgraphy is een grafische vormgever die zich bezighoudt met ontwerpen. Combell is een bedrijf voor het hosten van websites en 
                            het bijhouden van domeinnamen. Hoewel het bedrijf toch wat klanten aantrekt is er veel concurrentie in de buurt. Een paar voorbeelden 
                            zijn MyFirstWebsite, CarpeData, Lidoma Web Designer,... Het is tegenwoordig gemakkelijker om goede bedrijven te vinden op het internet 
                            dan buiten, in de omgeving. De meeste klanten worden vooral aangetrokken door de pagina’s op social media over LBit en daarom probeert 
                            het bedrijf hierin groter te worden.
                            <br/><br/>
                            Momenteel is het bedrijf gevestigt op de woonplaats van de ondernemer. Omdat er geen andere werknemers zijn is dit een enorm efficiënte 
                            plaats om een bedrijf op te starten. Er moeten meestal geen klanten langs komen in het bedrijf zelf. Alle communicatie vindt online plaats. 
                            Als iemand geïnteresseerd is, hoeft die persoon enkel een mailtje te versturen naar het e-mailadres van LBit. Eerst wordt er een korte 
                            kennis gemaakt. Dan wordt er bepaald in welke lay-out er gaat gewerkt worden, eventuele foto’s als referentie.
                            <br/><br/>
                            Vervolgens wordt er gesproken over de inhoud. Als voorlaatste wordt er gekeken naar de vindbaarheid op zoekmachines en of er hiermee 
                            eventuele acties kunnen ondernomen worden. En als laatste wordt er geprobeerd om manieren te vinden waardoor je meer bekend geraakt 
                            op social media. LBit is een heel goed bedrijf als je op zoek bent naar iemand die jou helpt bij het ontwerpen van websites, 
                            het ontwerpen van een logo of als je professionele foto’s nodig hebt.
                            
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