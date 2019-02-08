import React from "react";
import {Sidebar, Menu, Icon, Input, Divider, Popup} from "semantic-ui-react";

export default class RightSideBar extends React.Component {
    render() {
        return (
            <Sidebar as={Menu} animation="overlay" direction="right" width="thin" inverted vertical visible={this.props.visible} onMouseLeave={this.props.hideSideBar}>
                <div id="search-container">
                    <Input id="search" placeholder="Search..." icon={<Icon name="search" inverted circular />} />
                </div>
                <Divider/>
                <Menu.Item as="h5" header><Icon name="external" />External Links</Menu.Item>
                <Popup
                    trigger={<Menu.Item as="a" header href="https://github.com/KittyJ-Immalle/GIPSite">GitHub</Menu.Item>}
                    header="GitHub"
                    content="Link to the source code"
                />
                <Popup
                    trigger={<Menu.Item as="a" header href="https://www.lbit.be/">LBit website</Menu.Item>}
                    header="LBit"
                    content="Link to LBit's website"
                />
                <Popup
                    trigger={<Menu.Item as="a" header href="https://react.semantic-ui.com/">Semantic ReactJS</Menu.Item>}
                    header="Semantic ReactJS"
                    content="Link to the Semantic ReactJS documentation"
                />
            </Sidebar>
            
        );
    }
}