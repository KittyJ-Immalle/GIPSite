import React from "react";
import { Image, Grid } from "semantic-ui-react";

export default class Banner extends React.Component {
    render() {
        return (
            <div id="banner">
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Image className="no-border logo" src="/img/logo.png" id="lbit"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className="no-border logo" src="/img/logo-studiocontent.png" id="lbit"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    };
}