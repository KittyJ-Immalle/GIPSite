import React from "react";
import {Header, Segment, Grid, Divider, Label} from "semantic-ui-react";

export default class TipsTricks extends React.Component{
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
                            <Header as="h2"color="grey">Tips + Tricks</Header>
                            <Divider/>
                                    <div className="font-advent-pro text-25 line-spacing text-center side-padding">
                                        <br/><br/>
                                        Berekeningen worden vanzelf uitgerekend:
                                        100 + 100 = 200 
                                        14 + 20 = 34 
                                        De uitkomst komt vanzelf!

                                        Snelle notities maken: windowstoets + n

                                        Tekst kopiëren van afbeelding<br/><br/>
                                        <img alt="" className="ui image centered medium" src="img/tips-tricks.png"/>
                                        Napoleons enige wettige zoon, Napoleon <br/>
                                        II, geschilderd 
                                        door Moritz Michael Daffinger <br/>
                                        <br/>
                                        Excel en Word bestanden kan je gemakkelijk in OneNote slepen!<br/>
                                    </div>
                            <br/><br/><Divider /><br/><br/><br/><p className="text-center">Site by <a href="https://github.com/KittyJ-Immalle/GIPSite">Kitty Jacobs</a></p><br/><br/>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} classNameName="opacity-0"/>
            </Grid>
            
        )
    }
}