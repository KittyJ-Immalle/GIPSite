import React from "react";
import {Icon, Container, Header, Segment, Grid, Divider, Label, Step} from "semantic-ui-react";

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-10"})
    }

    showBody() {
        this.setState({bodyClass: "opacity-90"})
    }

    render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} className="opacity-0"/>
                <Grid.Column width={12} className={this.state.bodyClass} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                        <Segment>
                            <Label as="a" color="red" ribbon>
                                Welcome!
                            </Label>
                            <Header as="h2" color="grey">Introducing LBit Internship Web Report</Header>
                            <Divider/>
                            <Container>
                                LBit is een bedrijf in Beerse op het adres Hulderakkers 5, 2340 BEERSE. 
                                LBit focust zich vooral op het maken en designen van websites en logo’s. 
                                Maar ook fotografie komt hier aan bod. De samenwerking tussen bedrijf en klant is bij LBit heel belangrijk. 
                                Hun missie is om de klant tevreden te stellen en hen te helpen bij het verkrijgen van een mooie website, logo of foto’s.
                            </Container>

                            <Divider />

                            <Grid columns={3} divided>
                                <Grid.Column>
                                        LBit is een eenmanszaak met als ondernemingsnummer BE 0636 963 663. 
                                        Het is terug te vinden in de tertiaire sector als dienstverlenend bedrijf. 
                                        LBit heeft maar één ondernemer. Omdat het balanstotaal €350 000 en de netto-omzet €700 000 niet overschrijden, is LBit een micro-onderneming. 
                                        Het bedrijf heeft geen leveranciers die fysieke producten leveren maar Cgraphy en Combell leveren diensten voor het bedrijf. 
                                        Cgraphy is een grafische vormgever die zich bezighoudt met ontwerpen. Combell is een bedrijf voor het hosten van websites en het bijhouden van domeinnamen. 
                                        Hoewel het bedrijf toch wat klanten aantrekt is er veel concurrentie in de buurt. Een paar voorbeelden zijn MyFirstWebsite, CarpeData, Lidoma Web Designer,...
                                    </Grid.Column>
                                    <Grid.Column>
                                        Het is tegenwoordig gemakkelijker om goede bedrijven te vinden op het internet dan buiten, in de omgeving. 
                                        De meeste klanten worden vooral aangetrokken door de pagina’s op social media over LBit en daarom probeert het bedrijf hierin groter te worden. 
                                        Momenteel is het bedrijf gevestigt op de woonplaats van de ondernemer.
                                    </Grid.Column>
                                    <Grid.Column>
                                        Omdat er geen andere werknemers zijn is dit een enorm efficiënte plaats om een bedrijf op te starten. Er moeten meestal geen klanten langs komen in het bedrijf zelf. 
                                        Alle communicatie vindt online plaats. Als iemand geïnteresseerd is, hoeft die persoon enkel een mailtje te versturen naar het e-mailadres van LBit. Eerst wordt er een korte kennis gemaakt. 
                                        Dan wordt er bepaald in welke lay-out er gaat gewerkt worden, eventuele foto’s als referentie. Vervolgens wordt er gesproken over de inhoud. 
                                        Als voorlaatste wordt er gekeken naar de vindbaarheid op zoekmachines en of er hiermee eventuele acties kunnen ondernomen worden. 
                                        En als laatste wordt er geprobeerd om manieren te vinden waardoor je meer bekend geraakt op social media. 
                                        LBit is een heel goed bedrijf als je op zoek bent naar iemand die jou helpt bij het ontwerpen van websites, het ontwerpen van een logo of als je professionele foto’s nodig hebt.
                                </Grid.Column>
                            </Grid>

                            <Step.Group>
                                <Step>
                                    <Icon name="desktop"/>
                                    <Step.Content>
                                        <Step.Title>a</Step.Title>
                                        <Step.Description>b</Step.Description>
                                    </Step.Content>
                                </Step>
                                <Step>
                                    <Icon name="heart"/>
                                    <Step.Content>
                                        <Step.Title>a</Step.Title>
                                        <Step.Description>b</Step.Description>
                                    </Step.Content>
                                </Step>
                            </Step.Group>

                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>

            
        )
    }
}