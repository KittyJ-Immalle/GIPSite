import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Dankmail extends React.Component{
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
                                    <div className="font-advent-pro text-25 line-spacing side-padding">
                                        <br/><br/>
                                        <div className="text-right">2018-10-01<br/></div>
                                        Kitty Jacobs<br/>
                                        Withoevelaan 6<br/>
                                        2980 ZOERSEL<br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        Mevrouw Braspenning<br/>
                                        LBit<br/>
                                        Hulderakkers 5<br/>
                                        2340 BEERSE<br/>
                                        <br/>
                                        <br/>
                                        Dankmail observatieperiode<br/>
                                        <br/>
                                        <br/>
                                        Geachte mevrouw Braspenning<br/>
                                        <br/>
                                        Ik ben in de week van 1 oktober in het kader van mijn geïntegreerde proef op uw bedrijf, LBit, op stage geweest. Hier zou ik bijleren door administratieve taken te vervullen, een kijkje nemen naar de werking van het bedrijf en de gebruikte softwarepakketten bestuderen. Ik wil u hiervoor bedanken.<br/>
                                        <br/>
                                        Het was een leuke ervaring om zelf de werking van een bedrijf te zien en dat ik zelf ook een stukje code mocht toevoegen. U heeft me goed geholpen wanneer ik niet goed wist wat ik moest doen of wanneer ik niet meer verder kon. Het was heel leuk dat u mij meenam naar een vergadering en naar het kinderdagverblijf.<br/>
                                        <br/>
                                        Ondanks dat LBit geen heel groot bedrijf is, heb ik toch veel bijgeleerd. Ik weet nu welke lagen er kunnen bestaan bij een webapplicatie en hoe ze met elkaar communiceren, hoe je een website online kan zetten en hoe je bepaalde problemen oplost.<br/>
                                        <br/>
                                        Ik zal nu verder tijd besteden aan mijn schooltaken door ze af te werken en te verbeteren waar nodig. Later zullen deze taken op mijn eigen website komen. Deze website zou ergens volgend jaar af moeten zijn. Ik zal proberen om dan een link door te sturen zodat u ze ook kan bekijken.<br/>
                                        <br/>
                                        Ik wil u enorm bedanken om mij een kijkje te laten nemen in uw bedrijf. Dit zal me altijd bijblijven. Het was een heel leuke samenwerking en ik wens u nog veel geluk toe in de toekomst!<br/>
                                        <br/>
                                        Met vriendelijke groeten<br/>
                                        <br/>
                                        Kitty Jacobs<br/>
                                        Leerlinge Immaculata Instituut<br/>
                                        <br/>
                                        <br/><br/>
                                    </div>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} classNameName="opacity-0"/>
            </Grid>
            
        )
    }
}