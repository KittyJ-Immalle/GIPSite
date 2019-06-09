import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class Webapplicatie extends React.Component{
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
                                Webapplicatie
                            </Label>
                            <Header as="h2"color="grey">Analyseren, ontwerpen en implementeren van een (web)applicatie</Header>
                            <Divider/><br/><br/>
                                <img alt="" className="ui image centered massive" src="img/diagrammas.png"/>
                                    <div className="font-arial text-17 line-spacing text-center">
                                        <br/><br/>
                                        <div className="text-35">Webapplicatie</div><br/><br/>
                                        GitHub: <a href="https://github.com/KittyJ-Immalle/GIPWebApp">https://github.com/KittyJ-Immalle/GIPWebApp</a>
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