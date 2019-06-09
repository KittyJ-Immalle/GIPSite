import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class PersoonlijkeNotitieblok extends React.Component{
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
                            <Header as="h2"color="grey">Persoonlijk notitieblok + waar het staat in OneDrive</Header>
                            <Divider/>
                                    <div className="font-arial text-17 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Persoonlijk notitieblok</div><br/>
                                        - Standaard voor iedereen, delen kan met andere mensen<br/>
                                        - Deze vind je enkel lokaal<br/>
                                        <br/><br/>
                                        <img alt="" className="ui image centered large" src="img/persoonlijke-notitieblok-1.png"/>
                                        <br/><br/>
                                        <div className="text-35">Notitieblok school</div><br/>
                                        - Al aangemaakt voor jou.<br/>
	                                    - Deze vind je terug op OneDrive. Je kan er altijd en overal aan.<br/>
                                        <br/><br/>
                                    </div>
                                    <img alt="" className="ui image centered large" src="img/persoonlijke-notitieblok-2.png"/>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0"/>
            </Grid>
            
        )
    }
}