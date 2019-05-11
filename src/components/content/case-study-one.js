import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class CaseStudyOne extends React.Component{
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
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Case study</div><br/>
                                        Website ‘t Pagaderke<br/>
                                        ‘t Pagaderke is een kinderdagverblijf.<br/> De website https://www.pagaderke.be/ is gemaakt door Leen Braspenning van LBit.
                                        <br/><br/><br/>
                                    </div>
                                <Grid>
                                <Grid.Row>
                                    <img alt="" className="ui image smaller-image centered" src="img/pagaderke.png"/>
                                </Grid.Row>
                                <Grid.Row>
                                    <div className="text-25 line-spacing font-advent-pro text-center side-padding">
                                        Omdat de website al meer dan 4 jaar oud is is de code ervan enorm veel en lang. 
                                        Er zijn in de loop van de jaren veel aanpassingen gebeurd en zelfs nog op deze moment zelf. 
                                        Meestal zijn dit geen hele grote aanpassingen maar er moet hier en daar soms nog iets veranderen. 
                                        In de code vind je ook veel AngularJs en Bootstrap terug. AngularJs is nog niet zo oud maar moest 
                                        Leen het programma helemaal opnieuw beginnen schrijven zou ze wel eens op zoek gaan naar nieuwere technologieën. <br/><br/>
                                        Het is niet altijd even gemakkelijk voor haar omdat ze alleen werkt en de tijd en het geld niet heeft om veel 
                                        cursussen te volgen maar dat kan het weer gemakkelijker maken om aanpassingen te doen omdat je weet waar 
                                        alles staat en wat  het betekent. .NET zou wel behouden worden. Leen is enorm vertrouwd met .NET en ze is 
                                        er al veel mee bezig geweest. <br/><br/>Op dit moment zou het programma niet snel even herschreven kunnen worden 
                                        omdat het daar een beetje te groot en complex voor is hoewel de lagenstructuur nog wel behouden wordt. 
                                        Ik heb een schema gemaakt over 1 onderdeel van de website. Het prikbord tonen op het scherm.
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