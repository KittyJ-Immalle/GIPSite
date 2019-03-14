import React from "react";
import {Sidebar, Sticky, Segment} from "semantic-ui-react";
import {Route, Switch} from "react-router-dom";

import Banner from "./banner.js";
import LeftSideBar from "./sidebars/left-sidebar.js";
import RightSideBar from "./sidebars/right-sidebar.js";
import Home from "./content/home.js";
import Dagverslagen from "./content/dagverslagen.js";
import Reportage from "./content/reportage.js";

const backdrops = {
    "BEACH": "beach",
    "DAWN": "dawn",
    "DONUT": "donut",
    "SAILBOATS": "sailboats",
    "SKYLINE": "skyline",
    "BOATS": "boats"
};

export default class Landing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visible: false,
            backgroundClass: backdrops.BOATS
        }
    }


    showSideBar = () => this.setState({visible:true});
    hideSideBar = () => this.setState({visible:false});

    selectHome() {
        this.props.history.replace("/");
        this.setState({backgroundClass: backdrops.BOATS});
    }

    selectDagverslagen() {
        this.props.history.replace("/dagverslagen");
        this.setState({backgroundClass: backdrops.SAILBOATS});
    }

    selectReportage() {
        this.props.history.replace("/reportage");
        this.setState({backgroundClass: backdrops.DAWN})
    }

    render() {
        return (
            <div>
                <Banner/>
                <Sidebar.Pushable as={Segment} basic id="background" className={this.state.backgroundClass}>
                    <Sticky>
                        <LeftSideBar
                            visible={this.state.visible}
                            hideSidebar={this.hideSideBar}
                            selectHome={this.selectHome.bind(this)}
                            selectDagverslagen={this.selectDagverslagen.bind(this)}
                            selectReportage={this.selectReportage.bind(this)}
                        />
                    </Sticky>
                    <Sticky>
                        <RightSideBar
                            visible={this.state.visible}
                            hideSidebar={this.hideSideBar}
                        />
                    </Sticky>
                    <Sidebar.Pusher id="central-column">
                        <Switch>
                            <Route exact path="/reportage" render={prop => <Reportage showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                            <Route exact path="/dagverslagen" render={prop => <Dagverslagen showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                            <Route path="/" render={props => <Home showSideBar={this.showSideBar} hideSideBar={this.hideSideBar} {...props}/>}/>
                        </Switch>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}