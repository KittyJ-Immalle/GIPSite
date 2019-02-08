import React from "react";
import {Modal, Menu, Icon, Button, Grid, Label} from "semantic-ui-react";

import ReactJSCard from "../cards/reactjs-card.js";
import NodeJSCard from "../cards/nodejs-card.js";
import NPMCard from "../cards/npm-card.js";
import SemanticJSCard from "../cards/semanticjs-card.js";

export default class Technical extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            like: 0,
            views: 0
        }
    }

    like() {
        this.setState({like: this.state.like + 1});
    }

    close() {
        this.setState({open: false});
    }

    open() {
        this.setState({open: true});
        this.setState({views: this.state.views + 1});
    }

    render() {
        return (
            <Modal
            open={this.state.open}
            size="large"
            id="technical-modal"
            onClose={this.close.bind(this)}
            trigger={
                <Menu.Item onClick={this.open.bind(this)}>
                    <Icon name="wrench"/>
                    Technical
                </Menu.Item>
            }>
                <Modal.Header>List of Frameworks and Libraries for Development</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Grid columns={4}>
                            <Grid.Column>
                                <ReactJSCard/>
                            </Grid.Column>
                            <Grid.Column>
                                <NodeJSCard/>
                            </Grid.Column>
                            <Grid.Column>
                                <NPMCard/>
                            </Grid.Column>
                            <Grid.Column>
                                <SemanticJSCard/>
                            </Grid.Column>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Menu compact>
                    <Menu.Item as='a' onClick={this.like.bind(this)}>
                    <Icon name='like' /> Like
                    <Label color='red' floating>
                        {this.state.like}
                    </Label>
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='users' /> Views
                    <Label color='teal' floating>
                        {this.state.views}
                    </Label>
                    </Menu.Item>
                </Menu>
                    <Button color="blue" onClick={this.close.bind(this)}>Close</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}