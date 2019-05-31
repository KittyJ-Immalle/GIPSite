import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class FAQ extends React.Component{
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
                                FAQ
                            </Label>
                            <Header as="h2"color="grey">Foire Aux Questions</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center side-padding">
                                        <br/><br/>
                                        <div className="text-35">Foire Aux Questions - IT-TAPA</div><br/>
                                        Bienvenue! J’espère que vous vous amusez à lire mon site web et peut-être vous avez quelques questions de notre IT-TAPA auxquelles je peux répondre ici.<br/>
                                        <br/>
                                        Qu’est-ce que vous avez fait pendant votre IT-TAPA?<br/>
                                        Nous avons expliqué comment on peut utiliser OneNote. Comment devez-vous faire des nouveaux bloc-notes? Comment peut-on l’utiliser dans la classe?... <br/>
                                        <br/>
                                            2. Vous avez fait le IT-TAPA pourquoi?<br/>
                                        Nous voulons aider des profs avec l'informatique. Nous savons ce n’est pas toujours très facile car parfois ils n’ont pas eu les cours nécessaires.<br/>
                                        <br/>
                                            3. Si j’ai raté votre IT-TAPA, il y a d'autres façons pour apprendre à utiliser OneNote?<br/>
                                        Oui, nous avons utilisé un bloc-note avec toute l’information que nous avons expliqués pendant le IT-TAPA. Si vous voulez l’utiliser, vous pouvez m’envoyer un e-mail à kitty.jacobs@immalle.be. Il y a aussi beaucoup de tutoriels que vous pouvez trouver en ligne.<br/>
                                        <br/>
                                            4. Avez-vous d’autres projets?<br/>
                                        Oui, je mets tous mes projets sur GitHub. Vous me pouvez trouver ici: <a href="https://github.com/KittyJ-Immalle">https://github.com/KittyJ-Immalle</a>.
                                    </div>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}