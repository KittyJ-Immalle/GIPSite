import React from "react";
import {Image, Header, Segment, Grid, Divider, Label, Modal} from "semantic-ui-react";

export default class Dagsverslagen extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            bodyClass: "opacity-10"
        }
    }

    hideBody() {
        this.setState({bodyClass: "opacity-10"})
    }

    showBody() {
        this.setState({bodyClass: "opacity-90"});
    }
 render() {
        return (
            <Grid columns={3}>
                <Grid.Column width={2} className="opacity-0"/>
                <Grid.Column width={12} className={this.state.bodyClass} onMouseEnter={this.props.hideSideBar} onMouseLeave={this.props.showSideBar}>
                    <div id="body-container" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                        <Segment>
                            <Label as="a" color="blue" ribbon>
                                Gallery! 
                            </Label>
                            <Header as="h2"color="grey">Dagsvrslagen </Header>
                            <Divider />

                            <Grid columns={3} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Modal size="large" trigger={<Image size="large" style={{height: "275px"}} src="https://orig00.deviantart.net/b014/f/2013/006/1/4/143fbd27d2c05939330c6953870183e1-d5qmj6v.jpg" />}>
                                            <Modal.Content image>
                                                <Image src="https://orig00.deviantart.net/b014/f/2013/006/1/4/143fbd27d2c05939330c6953870183e1-d5qmj6v.jpg" />
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>
<Grid.Column>
                                        <Modal size="large" trigger={<Image size="large" style={{height: "275px"}} src="https://pre00.deviantart.net/10ad/th/pre/f/2012/361/b/5/three_mountains_by_taenaron-d5pc15l.jpg" />}>
                                            <Modal.Content image>
                                                <Image src="https://pre00.deviantart.net/10ad/th/pre/f/2012/361/b/5/three_mountains_by_taenaron-d5pc15l.jpg" />
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Modal size="large" trigger={<Image size="large" style={{height: "275px"}} src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/9/9f/Mountain_landscapee_by_fel_x-d49kpfu.jpg/revision/latest?cb=20171010141009" />}>
                                            <Modal.Content image>
                                                <Image src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/9/9f/Mountain_landscapee_by_fel_x-d49kpfu.jpg/revision/latest?cb=20171010141009" />
                                            </Modal.Content>
                                        </Modal>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={2} className="opacity-0" onMouseEnter={this.props.showSideBar} onMouseLeave={this.props.hideSideBar}/>
            </Grid>
        );
    }
}