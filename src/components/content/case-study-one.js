import React from "react";
import {Header, Segment, Grid, Divider, Label, Container} from "semantic-ui-react";

export default class CaseStudyOne extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bodyclassName: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyclassName: "opacity-30"})
    }

    showBody() {
        this.setState({bodyclassName: "opacity-90"})
    }

    render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} classNameName="opacity-0"/>
                <Grid.Column width={12} classNameName={this.state.bodyclassName} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                    <Segment>
                            <Label as="a" color="blue" ribbon>
                                Analyse
                            </Label>
                            <Header as="h2"color="grey">Analyse v.d. huisstijl</Header>
                            <Divider/>
                                    <div className="text-analyse">
                                        <div className="text-35">Case study</div><br/>
                                        Website ‘t Pagaderke<br/>
                                        ‘t Pagaderke is een kinderdagverblijf.<br/> De website https://www.pagaderke.be/ is gemaakt door Leen Braspenning van LBit.
                                    </div>
                                <Grid>
                                <Grid.Row>
                                        <div className="text-analyse side-padding">
                                        <br/>Je kan hierin goed het lettertype zien in LBit.be. 
                                        Op de website staat de meeste tekst gecentreerd zodat het gemakkelijker wordt om meer stukken tekst op het scherm te tonen. 
                                        Dit is hier een voorbeeld van.
                                        <br/><br/>
                                        </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <img className="ui image centered" src="img/website2.png"/>
                                </Grid.Row>
                                <Grid.Row>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-analyse side-padding">
                                        <br/>Op de website van LBit staan enkele foto’s die veel met elkaar gemeen hebben. Neem bijvoorbeeld deze foto.
                                        <br/>
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                        <img className="ui image centered smaller-image" src="img/lbit-tab.png"/>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-analyse side-padding">
                                        <br/>De foto is gefilterd in zwart-wit met op de voorgrond de ondernemer, Leen. Door de lach en de goede belichting geeft dit een aangename sfeer. In de foto kan je een acties terugvinden bv. de bewegende auto, de wind in het haar. Je krijgt hierdoor minder de indruk dat het geposeerd was maar meer de indruk dat dit het dagelijks leven is van Leen.
                                        LBit heeft een heel unieke en mooie huisstijl. Het valt goed op en je kan het overal herkennen.
                                        <br/><br/><br/>
                                    </div>
                                </Grid.Row>
                            </Grid>


                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} classNameName="opacity-0"/>
            </Grid>
            
        )
    }
}