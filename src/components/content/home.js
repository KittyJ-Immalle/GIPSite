import React from "react";
import {Container, Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Home extends React.Component{
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
                            <Label as="a" color="red" ribbon>
                                Home
                            </Label>
                            <Header as="h2" color="grey">Welkom!</Header>
                            <Divider/>
                            <img alt="" className="ui medium image centered" src="img/logo.png"/>
                            <Container className="font-advent-pro text-25 line-spacing text-center">
                                <br/><br/>Hallo! Ik ben Kitty Jacobs en ik ben 17 jaar oud. 
                                Ik woon in Sint-Antonius en ik ga naar school op het Immaculata Instituut. 
                                Ik heb al een aantal jaren een passie voor webdevelopment en hier zie ik mij in de toekomst nog mee bezig.
                                <br/><br/>
                            </Container>

                            <Divider />

                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <iframe frameBorder="0" allowFullScreen title="aa" height="100%" width="100%" src="https://youtube.com/embed/HlHcNisPs6s">
                                    </iframe>
                                    
                                </Grid.Column>
                                        
                                <Grid.Column className="font-advent-pro text-25 line-spacing text-center">
                                        Daarom heb ik met veel enthousiasme deze website gemaakt.
                                        Op deze website vind je alle informatie terug over mijn stage bij LBit in Beerse. 
                                        <br></br><br></br>Onder dagverslagen vind je een overzicht van wat ik elke dag op mijn stage heb gedaan. 
                                        Bij reportage photo du stage vind je foto’s van mijn stageplaats met een kleine Franse omschrijving erbij. 
                                        Onder analyse van de huisstijl is er meer informatie te vinden over de huisstijl van LBit. 
                                        De bedrijfseconomische analyse is een analyse van het bedrijf LBit zelf. 
                                        <br></br><br></br>Verder kun je onder de andere tabs informatie vinden over mij en de technische elementen waaruit de website is opgebouwd.
                                        Ik hoop dat je veel leerplezier hebt!
                                        <br></br><br></br><br></br><br/>
                                </Grid.Column>
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