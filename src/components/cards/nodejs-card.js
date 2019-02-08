import React from "react";
import {Image, Icon, Card} from "semantic-ui-react";

export default class NodeJSCard extends React.Component {
    render() {
        return (
            <Card>
                <Image src="https://www.netgains.org/wp-content/uploads/2014/01/node_js.png"/>
                <Card.Content>
                    <Card.Header>Node JS</Card.Header>
                    <Card.Meta><span>JavaScript Runtime Environment</span></Card.Meta>
                    <Card.Description>Used to execute Javascript code outside of browsers for servers. Servers can be programmed to produce dynamic web pages or function as APIs</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a rel="noopener noreferrer" href="https://www.joyent.com/" target="_blank">
                        <Icon name="code"/>
                        Support by Joyent
                    </a>
                </Card.Content>
            </Card>
        );
    }
}