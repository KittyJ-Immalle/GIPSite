import React from "react";
import {Image, Icon, Card} from "semantic-ui-react";

export default class SemanticJSCard extends React.Component {
    render() {
        return (
            <Card>
                <Image style={{height: "336px"}} src="https://user-images.githubusercontent.com/4727/38117885-69734bbc-336c-11e8-8653-86b0fa071896.png"/>
                <Card.Content>
                    <Card.Header>Semantic UI React</Card.Header>
                    <Card.Meta><span>User Interface Framework</span></Card.Meta>
                    <Card.Description>Semantic UI React delivered the visuals for my web application. It comes with various design features to expediate beautiful web aesthetics.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a rel="noopener noreferrer" href="https://github.com/levithomason" target="_blank">
                        <Icon name="paint brush"/>
                        Original Developer by Levi Thomason
                    </a>
                </Card.Content>
            </Card>
        );
    }
}