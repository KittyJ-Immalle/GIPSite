import React from "react";
import {Modal, Menu, Icon, Button, Label, Segment, Image, Header} from "semantic-ui-react";

export default class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            count: 0
        }
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    close() {
        this.setState({open: false});
    }

    open() {
        this.setState({open: true});
    }

    render() {
        return (
            <Modal
            open={this.state.open}
            size="tiny"
            onClose={this.close.bind(this)}
            trigger={
                <Menu.Item onClick={this.open.bind(this)}>
                    <Icon name="github alternate"/>
                    Kitty Jacobs
                </Menu.Item>
            }>
                <Modal.Header>Hallo! Ik ben Kitty Jacobs</Modal.Header>
                <Modal.Content image>
                    <Segment color="pink">
                        <Image wrapped size="small" src="/img/colors.png"/>
                    </Segment>
                    <Modal.Description style={{paddingLeft:"20px"}}>
                        <Segment color="pink">
                            <Header as="h4">Welkom op mijn profiel!</Header>
                            <p>
                                Later wil ik graag een web developer worden!
                                <br/>
                                Daarom heb ik mezelf uitgedaagd en deze web
                                <br/>
                                applicatie voor mijn stage gemaakt door gebruik
                                <br/>
                                te maken van meer ingewikkelde libraries en
                                <br/>
                                frameworks.
                                <br/>
                                <br/>
                                Ik hoop dat het er mooi uitziet!
                            </p>
                        </Segment>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button as="div" labelPosition="right" onClick={this.incrementCount.bind(this)}>
                        <Button color="red">
                            <Icon name="heart"/>
                        </Button>
                        <Label as="div" basic color="red" pointing="left">
                            {this.state.count}
                        </Label>
                    </Button>
                    <Button color="blue" onClick={this.close.bind(this)}>Close</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}