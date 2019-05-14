import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class KlasnotitieblokDownloaden extends React.Component{
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
                            <Header as="h2"color="grey">Klasnotitieblok OneNote downloaden/ hoe het werkt/ wat je ermee kan doen/..</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Meld je aan op OneNote Class Notebook:</div><br/>
                                        Zoek op google:"klasnotitieblok OneNote"<br/>
                                        -> Eerste link:<br/>
                                        <a href="https://www.onenote.com/classnotebook?omkt=nl-NL">https://www.onenote.com/classnotebook?omkt=nl-NL</a><br/>
                                        Dan klik je op "Invoegtoepassing Class Notebook downloaden"<br/><br/><br/>
                                        <div className="text-35">Een klasnotitieblok:</div><br/>
                                        - Notitieblok voor de klas<br/>
                                        - Alle leerlingen kunnen aan de notities<br/>
                                        - Leerkracht kan notities toevoegen -> automatisch getoond voor alle leerlingen<br/>
                                        Leerlingen kunnen zelf oefeningen maken en ze op OneNote zetten. -> Leerkracht kan ze nakijken en beoordelen<br/>
                                        <br/><br/>
                                    </div>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered large" src="img/klasnotitieblok-downloaden-1.png"/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <img alt="" className="ui image centered large" src="img/klasnotitieblok-downloaden-2.png"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} classNameName="opacity-0"/>
            </Grid>
            
        )
    }
}