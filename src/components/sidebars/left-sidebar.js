import React from "react";
import {Sidebar, Menu, Icon} from "semantic-ui-react";

import TechnicalModal from "../modals/technical.js";
import ProfileModal from "../modals/profile.js";

export default class LeftSideBar extends React.Component {
    render() {
        return (
            <Sidebar as={Menu} animation="overlay" direction="left" icon="labeled" width="thin" inverted vertical visible={this.props.visible} onMouseLeave={this.props.hideSideBar}>
                <Menu.Item as="a" onClick={this.props.selectHome}>
                    <Icon name="home"/>
                    Home
                </Menu.Item>
                <Menu.Item as="a" onClick={this.props.selectDagverslagen}>
                <Icon name="newspaper" />
                    Dagverslagen
                </Menu.Item>
                <Menu.Item as="a" onClick={this.props.selectA}>
                    <Icon name="camera" />
                    Reportage Photo Du Stage
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="building" />
                    Analyse Van De Huisstijl
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="briefcase" />
                    Case Study
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="euro"/>
                    Bedrijfseconomische Analyse
                </Menu.Item>
                <ProfileModal/>
                <TechnicalModal/>
            </Sidebar>
        )
    }
}