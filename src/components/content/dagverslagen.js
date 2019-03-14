import React from "react";
import {Header, Segment, Grid, Divider, Label, Container} from "semantic-ui-react";

export default class Dagsverslagen extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-30"})
    }

    showBody() {
        this.setState({bodyClass: "opacity-90"});
    }
 render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} className="opacity-0"/>
                <Grid.Column width={12} className={this.state.bodyClass} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                        <Segment>
                            <Label as="a" color="blue" ribbon>
                                Dagverslagen 
                            </Label>
                            <Header as="h2"color="grey">Stageverslagen </Header>
                            <Divider />

                            <div class="text-20">
                                Hier vindt u mijn dagverslagen. Het is een overzicht over wat ik elke dag gedaan heb op mijn stage.
                            </div>
                            <br></br>
                            <br></br>

                            <Grid columns={3} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header as="h2">2018-10-01</Header>
                                        <Container>
                                            <div class="ui bulleted list">
                                                <div class="item text-16">Fototoestel afgehaald van de winkel</div>
                                                <div class="item text-16">Gitlab account aangemaakt</div>
                                                <div class="item text-16">Begonnen aan "bedrijfseconomische analyse van het stagebedrijf" en afgewerkt, enkel adres nog toevoegen en later eventuele verbeteringen</div>
                                                <div class="item text-16">Code aan een website (voor een klant) toegevoegd</div>
                                                <div class="item text-16">Begonnen aan "Analyse v.d. huisstijl v.h. stagebedrijf" en gedeeld met hans.vanbroeckhoven@immalle.be</div>
                                            </div>
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as="h2">2018-10-02</Header>
                                        <Container>
                                            <div class="ui bulleted list">
                                                <div class="item text-16">"bedrijfseconomische analyse van het stagebedrijf" is nu volledig afgewerkt</div>
                                                <div class="item text-16">Verder werken aan "Analyse v.d. huisstijl v.h. stagebedrijf" en afgewerkt</div>
                                                <div class="item text-16">Code aan een website gewijzigd lbit.be</div>
                                                <div class="item text-16">Een aantal foto's getrokken voor "Un reportage photo du stage"</div>
                                                <div class="item text-16">Begonnen aan "Case Study stagebedrijf"</div>
                                                <div class="item text-16">Naar een meeting geweest over ondernemen</div>
                                            </div>
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as="h2">2018-10-03</Header>
                                        <Container>
                                            <div class="ui bulleted list">
                                                <div class="item text-16">Werken aan schooltaken</div>
                                                <div class="item text-16">Verder werken aan "Case Study stagebedrijf" en afgewerkt</div>
                                            </div>
                                        </Container>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                        <Grid.Column>
                                            <Header as="h2">2018-10-04</Header>
                                            <Container>
                                                <div class="ui bulleted list">
                                                    <div class="item text-16">Verder werken aan "Un reportage photo du stage" en afgewerkt</div>
                                                    <div class="item text-16">Schema gemaakt over een onderdeel van Leen's programma (dit hangt los van de case study)</div>
                                                    <div class="item text-16">Verbeteringen toegevoegd aan het document van "Case Study stagebedrijf"</div>
                                                </div>
                                            </Container>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header as="h2">2018-10-05</Header>
                                            <Container>
                                                <div class="ui bulleted list">
                                                    <div class="item text-16">Naar een kinderdagverblijf geweest om daar de gebruikte software (door LBit geschreven) te gaan bekijken wanneer het in werking is en om hun software up to date te brengen</div>
                                                    <div class="item text-16">Begonnen aan "dankmail voor stagebedrijf" en afgewerkt</div>
                                                    <div class="item text-16">Info opgezocht over Vue.js</div>
                                                </div>
                                                <br></br>
                                            </Container>
                                        </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0" onMouseEnter={this.props.showSideBar} onMouseLeave={this.props.hideSideBar}/>
            </Grid>
        );
    }
}