import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Reportage extends React.Component{
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
                                Reportage
                            </Label>
                            <Header as="h2"color="grey">Reportage photo du stage </Header>
                            <Divider />

                            <div className="font-advent-pro text-25 line-spacing text-center">
                            <br/>
                                Hier vindt u mijn dagverslagen. Het is een overzicht over wat ik elke dag gedaan heb op mijn stage.
                            </div>
                            <br></br>
                            <br></br>

                            <Grid columns={2} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <img className="ui centered large image rounded" src='img/gebouw.jpg' alt="a"/>
                                        <div className="font-advent-pro text-25 line-spacing text-center">
                                            <br></br>
                                            Voici mon stage à Beerse! Je sais à quoi vous pensez. Ce n’est pas un bâtiment très grand et oui, c’est vrai. C’est la maison de l’entrepreneuse de LBit à Beerse.
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <img className="ui centered large image rounded" src='img/laptop.jpg' alt="a"/>
                                        <div className="font-advent-pro text-25 line-spacing text-center">
                                            <br></br>
                                            La plupart du temps je travaille ici sur mon ordinateur portable. Leen, l’entrepreneuse, m’a donné cet ordinateur pour travailler. Elle est trop gentille!
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                        <Grid.Column>
                                            <img className="ui centered large image rounded" src='img/leen.jpg' alt="a"/>
                                            <div className="font-advent-pro text-25 line-spacing text-center">
                                                <br></br>
                                                Normalement, Leen travaille toujours seule mais pour cette semaine je l’accompagne pendant les heures de travail. Sans moi, elle n’a pas d’autres personnes dans la maison.
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <img className="ui centered large image rounded" src='img/printer.jpg' alt="a"/>
                                            <div className="font-advent-pro text-25 line-spacing text-center">
                                                <br></br>
                                                Notre imprimante! Ah oui, tu restes toujours dans ma mémoire! Je me rappelle les moments quand tu as fait les sons: “beep… beep… beep....”. Très magnifique!
                                            </div>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                        <Grid.Column>
                                            <img className="ui centered large image rounded" src='img/lunch.jpg' alt="a"/>
                                            <div className="font-advent-pro text-25 line-spacing text-center">
                                                <br></br>
                                                Notre imprimante! Ah oui, tu restes toujours dans ma mémoire! Je me rappelle les moments quand tu as fait les sons: “beep… beep… beep....”. Très magnifique!
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <img className="ui centered large image rounded" src='img/kitty.jpg' alt="a"/>
                                            <div className="font-advent-pro text-25 line-spacing text-center">
                                                <br></br>
                                                Vous pouvez voir que je suis très concentrée. C’est entre moi et mes tâches de l’école et je gagnerai! Rien ne peut m’arrêter!
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