import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class CaseStudyTwo extends React.Component{
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
                                Case Study 2
                            </Label>
                            <Header as="h2"color="grey">Case Study 2</Header>
                            <Divider/>
                                <img alt="" className="ui image smaller-image-2 centered" src="img/firebase-logo.png"/>
                                    <div className="font-advent-pro text-23 line-spacing text-center side-padding">
                                        <div className="text-35">Case study</div><br/>
                                        Firebase is een platform voor mobiele en webapplicaties. Het biedt enorm veel services. 
                                        Enkele voorbeelden zijn: user authenticatie, het hosten van een web applicatie, cloud storage, 
                                        realtime database, testen van je app, google analytics,…<br/><br/>
                                        Ik maak voor mijn website gebruik van Firebase. Hiermee krijg ik een url die ik met iedereen kan delen.<br/>
                                        <i>Hoe gaan we te werk?</i><br/><br/>
                                        Log in op firebase en klik op “go to console”.
                                        <br/><br/>
                                    </div>
                                <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <img alt="" className="ui image centered" src="img/go-to-console.png"/>
                                        <div className="font-advent-pro text-23 line-spacing text-center side-padding">
                                            <br/><br/>
                                            Hier kunnen we een project toevoegen.
                                            <br/><br/><br/><br/>
                                        </div>
                                        <img alt="" className="ui image centered" src="img/project-add.png"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <img alt="" className="ui image centered" src="img/project.png"/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-23 line-spacing font-advent-pro text-center side-padding">
                                        <br/>
                                        Voordat we kunnen beginnen moeten we er eerst voor zorgen dat onze index.html in een directory 
                                        staat die public heet. Het systeem zal zoeken naar “public/index.html”, dit is een standaard pad 
                                        dat gebruikt wordt. Je kan best alle CSS en JavaScript mee in public zetten. Dit is niet technisch 
                                        noodzakelijk maar het maakt het gemakkelijker als je in je HTML file wilt verwijzen naar andere files.
                                        <br/><br/><br/>
                                        Als we het project hebben gemaakt moeten we deze vervolgens gaan deployen op Firebase.
                                        <br/><br/>
                                        Om dit te doen voeren we eerst het commando “<mark>npm install -g firebase-tools</mark>” uit op de computer.
                                        <br/><br/>
                                        “-g” betekent globaal, daardoor hoeven we dit maar 1 keer uit te voeren. Firebase-tool is een CLI programma 
                                        waarmee je firebase commando’s kan uitvoeren.
                                        <br/><br/>
                                        Alle commando’s die we nu gaan gebruiken moeten uitgevoerd worden op de root van het project.
                                        <br/><br/>
                                        Om verbinding te kunnen maken ons project op firebase dat we in het begin hebben gemaakt, moeten we ons 
                                        eerst aanmelden op de CLI. Dit kunnen we doen door “<mark>firebase login</mark>” te gebruiken.
                                        <br/><br/>
                                        We moeten vervolgens eerst “<mark>npm run-script build</mark>” typen. Hiermee verkleinen we ons project 
                                        door alle tabs, indentatie en lege regels te verwijderen.
                                        <br/><br/>
                                        Omdat we het id nodig hebben van ons project, kunnen we met “<mark>firebase list</mark>” krijgen we een lijst te 
                                        zien van alle projecten op firebase. Maar dit commando is niet verplicht.
                                        <br/><br/>
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <div className="text-23 line-spacing font-advent-pro text-center side-padding">
                                            We kunnen in de plaats daarvan ook het id aflezen op de website van Firebase. In ons project kunnen we op het 
                                            tandwieltje klikken rechts van Project Overview. Daarin vinden we “projectinstellingen”.
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <img alt="" className="ui image centered" src="img/projectinstellingen.png"/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-23 line-spacing font-advent-pro text-center side-padding">
                                        <br/><br/>
                                        Het project-id hebben we nodig om ons project te initialiseren met “<mark>firebase -P [projectID] init</mark>”. Het genereert 
                                        een paar files met informatie over jouw project die Firebase nodig zal hebben.
                                        <br/><br/>
                                        Er zullen een paar vraagjes gesteld worden. Bij de vraag “Which Firebase CLI features do you want to setup for 
                                        this folder?” selecteer je “Hosting” met de spatiebalk en druk je vervolgens op enter. De publieke directory laten 
                                        we staan op public. Bij de vraag “Configure as a single-page app (rewrite all urls to /index.html)?” antwoorden we nee.
                                        <br/><br/>
                                        Ten slotte gebruiken we “<mark>firebase deploy</mark>” om het project naar Firebase to deployen. Als je dit gedaan hebt krijg je 
                                        een hosting URL waarop je website staat. Je kan hem ook terugvinden op de website van Firebase bij “Hosting”.
                                        <br/><br/>
                                        Als voorbeeld gebruik ik mijn GIP-website die je kan terugvinden op <a href="https://gip-site.firebaseapp.com">https://gip-site.firebaseapp.com</a>. 
                                        <br/><br/><br/>
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