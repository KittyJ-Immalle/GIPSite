import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class LinksDistribueren extends React.Component{
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
                            <Header as="h2"color="grey">Links naar andere pagina's, distribueren naar alle/specifieke personen</Header>
                            <Divider/>
                                    <div className="font-arial text-17 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Link maken naar andere notitie:</div><br/><br/>
                                        Selecteer waar je een link wil<br/>
                                        Klik met rechtermuisknop of via Crtl+K<br/><br/><br/>
                                        <img alt="" className="ui image centered medium" src="img/links-distribueren-1.png"/><br/><br/>
                                        Kies de notitie die je wil linken<br/><br/><br/>
                                        <img alt="" className="ui image centered big" src="img/links-distribueren-2.png"/><br/><br/>
                                        Resultaat<br/><br/><br/>
                                        <img alt="" className="ui image centered large" src="img/links-distribueren-3.png"/><br/><br/>
                                        <div className="text-35">Iets belangrijk delen met elke leerling:</div><br/><br/><br/>
                                        Ga naar de notitie die je wil delen<br/>
                                        Selecteer de tekst<br/>
                                        rechtermuisknop<br/>
                                        Kies voor 'inhoud distribueren' en waar je het wil delen<br/><br/><br/>
                                        <img alt="" className="ui image centered large" src="img/links-distribueren-4.png"/><br/><br/>
                                        Resultaat<br/><br/><br/>
                                        <img alt="" className="ui image centered large" src="img/links-distribueren-5.png"/>
                                        <br/><br/>
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