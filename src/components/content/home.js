import React from "react";
import {Icon, Container, Header, Segment, Grid, Divider, Label, Step, Image} from "semantic-ui-react";

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-30"})
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
                                Home
                            </Label>
                            <Header as="h2" color="grey">Welkom!</Header>
                            <Divider/>
                            <Container className="text-20">
                                Hallo! Ik ben Kitty Jacobs en ik ben 17 jaar oud. 
                                Ik woon in Sint-Antonius en ik ga naar school op het Immaculata Instituut. 
                                Ik heb al een aantal jaren een passie voor webdevelopment en hier zie ik mij in de toekomst nog mee bezig.
                            </Container>

                            <Divider />

                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <Image src="img/flower.jpg" alt="LBit"/>
                                </Grid.Column>
                                        
                                <Grid.Column className="text-17">
                                        Daarom heb ik met veel enthousiasme deze website gemaakt.
                                        Op deze website vind je alle informatie terug over mijn stage bij LBit in Beerse. 
                                        <br></br><br></br>Onder dagverslagen vind je een overzicht van wat ik elke dag op mijn stage heb gedaan. 
                                        Bij reportage photo du stage vind je foto’s van mijn stageplaats met een kleine Franse omschrijving erbij. 
                                        Onder analyse van de huisstijl is er meer informatie te vinden over de huisstijl van LBit. 
                                        De bedrijfseconomische analyse is een analyse van het bedrijf LBit zelf. 
                                        <br></br><br></br>Verder kun je onder de andere tabs informatie vinden over mij en de technische elementen waaruit de website is opgebouwd.
                                        Ik hoop dat je veel leerplezier hebt!
                                </Grid.Column>
                            </Grid>

                                <Step.Group stackable="tablet">
                                    <Step>
                                        <Icon name="desktop"/>
                                        <Step.Content>
                                            <Step.Title>1. Website en Ontwikkeling</Step.Title>
                                            <Step.Description>Updaten en aanpassen</Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step>
                                        <Icon name="address card outline"/>
                                        <Step.Content>
                                            <Step.Title>2. Design</Step.Title>
                                            <Step.Description>Zoeken naar de beste layout</Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step>
                                        <Icon name="camera"/>
                                        <Step.Content>
                                            <Step.Title>3. Fotografie</Step.Title>
                                            <Step.Description>Zelf de beste foto's maken</Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step>
                                        <Icon name="heart"/>
                                        <Step.Content>
                                            <Step.Title>4. Samen</Step.Title>
                                            <Step.Description>We doen dit samen!</Step.Description>
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