import React from "react";
import {Image, Icon, Card} from "semantic-ui-react";

export default class ReactJSCard extends React.Component {
    render() {
        return (
            <Card>
                <Image className="no-border" src="https://sg.fiverrcdn.com/photos/82424391/original/34b89799b55372bac62d2482da37bb6d7bb1bc2e.png?1488226446"/>
                <Card.Content>
                    <Card.Header>React JS</Card.Header>
                    <Card.Meta><span>JavaScript UI Library</span></Card.Meta>
                    <Card.Description>Used to build single page wb application user interfaces in structured components encapsulating visuals and behaviour into an organized DOM tree</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/react/" target="_blank">
                        <Icon name="facebook"/>
                        Developed by Facebook
                    </a>
                </Card.Content>
            </Card>
        );
    }
}