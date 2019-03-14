import React from "react";
import {Icon, Container, Header, Segment, Grid, Divider, Label, Step, Image} from "semantic-ui-react";

export default class Reportage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-30"})
    }

    showBody() {
        this.setState({bodyClass: "opacity-90"})
    }

    render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} className="opacity-0"/>
                <Grid.Column width={12} className={this.state.bodyClass} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                    <Segment>
                            <Label as="a" color="blue" ribbon>
                                Dagverslagen 
                            </Label>
                            <Header as="h2"color="grey">Stageverslagen </Header>
                            <Divider />

                            <div class="text-20">
                                Hier vindt u mijn dagverslagen. Het is een overzicht over wat ik elke dag gedaan heb op mijn stage.
                            </div>
                            <br></br>
                            <br></br>

                            <Grid columns={2} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Image src='img/gebouw.jpg' alt="a"/>
                                        <div class="text-17">
                                            Asjdofihme
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as="h2">2018-10-02</Header>
                                        <Container>
                                            
                                        </Container>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>  
                                        <Grid.Column>
                                            <Header as="h2">2018-10-04</Header>
                                            <Container>
                                                
                                            </Container>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header as="h2">2018-10-05</Header>
                                            <Container>
                                                
                                            </Container>
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