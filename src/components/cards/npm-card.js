import React from "react";
import {Image, Icon, Card} from "semantic-ui-react";

export default class NPMCard extends React.Component {
    render() {
        return (
            <Card>
                <Image style={{height: "336px"}} className="no-border" src="https://achievement-images.teamtreehouse.com/badges_JavaScript_npmbasics_Stage1.png"/>
                <Card.Content>
                    <Card.Header>Node Package Manager</Card.Header>
                    <Card.Meta><span>JavaScript Package Manager</span></Card.Meta>
                    <Card.Description>Downloads and manages packages like ReactJS or SemanticJS, which are written by other companies or developers and made publicly available to use</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a rel="noopener noreferrer" href="https://github.com/isaacs" target="_blank">
                        <Icon name="inbox"/>
                        Original Author by Isaac Z Schleuter
                    </a>
                </Card.Content>
            </Card>
        );
    }
}