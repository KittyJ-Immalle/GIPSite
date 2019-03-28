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
                            <Label as="a" color="blue" ribbon>
                                Analyse
                            </Label>
                            <Header as="h2"color="grey">Analyse v.d. huisstijl</Header>
                            <Divider />

                            <img class="ui medium image centered" src="img/logo.png"/>

                            <Grid columns={2} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <img class="ui image centered" src="img/website.png"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div class="text-analyse">
                                            <br/><br/>LBit heeft een hele aparte huisstijl tegenover andere bedrijven. Het eerste opvallende onderdeel is de kleurcombinatie 
                                            en het lettertype dat gebruikt wordt. Het bedrijf maakt gebruik van de kleuren roze en goud in de naam van het bedrijf. 
                                            <br/><br/>Alle tekst wordt, indien mogelijk, in het lettertype Advent Pro geschreven. De roze kleur is terug te vinden in het logo 
                                            dat een hartje voorstelt. Op social media wordt er geprobeerd om altijd iets van de roze kleur te laten voorkomen.
                                            <br/>Dit is hoe de voorkant van de website eruit ziet.
                                            <br/><br/><br/>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>


                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}