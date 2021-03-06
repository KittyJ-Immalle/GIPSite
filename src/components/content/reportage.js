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

                            <br></br>
                            <br></br>

                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/gebouw.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                Voici mon stage à Beerse! Je sais à quoi vous pensez. Ce n’est pas un bâtiment très grand et oui, c’est vrai. C’est la maison de l’entrepreneuse de LBit à Beerse.
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/laptop.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                La plupart du temps je travaille ici sur mon ordinateur portable. Leen, l’entrepreneuse, m’a donné cet ordinateur pour travailler. Elle est trop gentille!
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/leen.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                Normalement, Leen travaille toujours seule mais pour cette semaine je l’accompagne pendant les heures de travail. Sans moi, elle n’a pas d’autres personnes dans la maison.
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/printer.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                Notre imprimante! Ah oui, tu restes toujours dans ma mémoire! Je me rappelle les moments quand tu as fait les sons: “beep… beep… beep....”. Très magnifique!
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/lunch.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                Chaque midi nous mangions dans la cuisine. Parfois je souhaite que je puisse manger une pizza ou des frites chaque jour mais peut-être ce n’est pas une de mes meilleures idées.
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Segment color='orange'>
                                            <br/>
                                            <img className="ui centered large image rounded" src='img/kitty.jpg' alt="a"/>
                                            <div className="font-arial text-17 line-spacing text-center">
                                                <br></br>
                                                Vous pouvez voir que je suis très concentrée. C’est entre moi et mes tâches de l’école et je gagnerai! Rien ne peut m’arrêter!
                                            </div><br/>
                                        </Segment>
                                    </Grid.Column>
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