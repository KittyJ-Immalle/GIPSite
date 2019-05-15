import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Analyse extends React.Component{
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
                            <Header as="h2"color="grey">Analyse v.d. huisstijl</Header>
                            <Divider />

                            <img alt="" className="ui medium image centered" src="img/logo.png"/>

                            <Grid columns={2} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <img alt="" className="ui image centered" src="img/website.png"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className="text-analyse">
                                            <br/><br/>LBit heeft een hele aparte huisstijl tegenover andere bedrijven. Het eerste opvallende onderdeel is de kleurcombinatie 
                                            en het lettertype dat gebruikt wordt. Het bedrijf maakt gebruik van de kleuren roze en goud in de naam van het bedrijf. 
                                            <br/><br/>Alle tekst wordt, indien mogelijk, in het lettertype Advent Pro geschreven. De roze kleur is terug te vinden in het logo 
                                            dat een hartje voorstelt. Op social media wordt er geprobeerd om altijd iets van de roze kleur te laten voorkomen.
                                            <br/>Dit is hoe de voorkant van de website eruit ziet.
                                            <br/><br/><br/>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                        <div className="text-analyse side-padding">
                                        <br/>Je kan hierin goed het lettertype zien in LBit.be. 
                                        Op de website staat de meeste tekst gecentreerd zodat het gemakkelijker wordt om meer stukken tekst op het scherm te tonen. 
                                        Dit is hier een voorbeeld van.
                                        <br/><br/>
                                        </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <img alt="" className="ui image centered" src="img/website2.png"/>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <img alt="" className="ui image centered" src="img/lbit-text.png"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className="text-analyse side-padding">
                                            <br/>De zin “Jouw project, mijn zaak!” Vinden we ook vaak terug. 
                                            Zowel op de website van LBit als op bv. <a href="http://www.webdesign-vinden.be/webdesign/antwerpen/beerse/lbit">http://www.webdesign-vinden.be/webdesign/antwerpen/beerse/lbit</a>.
                                            <br/><br/>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-analyse side-padding">
                                        <br/>Op de website van LBit staan enkele foto’s die veel met elkaar gemeen hebben. Neem bijvoorbeeld deze foto.
                                        <br/>
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                        <img alt="" className="ui image centered smaller-image" src="img/lbit-tab.png"/>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-analyse side-padding">
                                        <br/>De foto is gefilterd in zwart-wit met op de voorgrond de ondernemer, Leen. Door de lach en de goede belichting geeft dit een aangename sfeer. In de foto kan je een acties terugvinden bv. de bewegende auto, de wind in het haar. Je krijgt hierdoor minder de indruk dat het geposeerd was maar meer de indruk dat dit het dagelijks leven is van Leen.
                                        LBit heeft een heel unieke en mooie huisstijl. Het valt goed op en je kan het overal herkennen.
                                    </div>
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