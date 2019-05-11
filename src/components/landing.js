import React from "react";
import {Sidebar} from "semantic-ui-react";
import {Route, Switch} from "react-router-dom";

import Banner from "./banner.js";
import LeftSideBar from "./sidebars/left-sidebar.js";
import RightSideBar from "./sidebars/right-sidebar.js";
import Home from "./content/home.js";
import Dagverslagen from "./content/dagverslagen.js";
import Reportage from "./content/reportage.js";
import Analyse from "./content/analyse.js";
import CaseStudyOne from "./content/case-study-one.js";
import CaseStudyTwo from "./content/case-study-two.js";
import BedrijfseconomischeAnalyse from "./content/bedrijfseconomische-analyse.js";

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

    selectAnalyse() {
        this.props.history.replace("/analyse");
        this.setState({backgroundClass: backdrops.DONUT})
    }

    selectCaseStudyOne() {
        this.props.history.replace("/case-study-one");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectCaseStudyTwo() {
        this.props.history.replace("/case-study-two");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectBedrijfseconomischeAnalyse() {
        this.props.history.replace("/bedrijfseconomische-analyse");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    render() {
        return (
            <div>
                <Banner/>
                <div id="background" className={this.state.backgroundClass}>
                    <Sidebar.Pushable>
                    <LeftSideBar
                            visible={this.state.visible}
                            hideSidebar={this.hideSideBar}
                            selectHome={this.selectHome.bind(this)}
                            selectDagverslagen={this.selectDagverslagen.bind(this)}
                            selectReportage={this.selectReportage.bind(this)}
                            selectAnalyse={this.selectAnalyse.bind(this)}
                            selectCaseStudyOne={this.selectCaseStudyOne.bind(this)}
                            selectCaseStudyTwo={this.selectCaseStudyTwo.bind(this)}
                            selectBedrijfseconomischeAnalyse={this.selectBedrijfseconomischeAnalyse.bind(this)}
                        />
                        <RightSideBar
                            visible={this.state.visible}
                            hideSidebar={this.hideSideBar}
                        />
                        <Sidebar.Pushable>
                            <Switch>
                                <Route exact path="/bedrijfseconomische-analyse" render={prop => <BedrijfseconomischeAnalyse showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/case-study-two" render={prop => <CaseStudyTwo showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/case-study-one" render={prop => <CaseStudyOne showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/dagverslagen" render={prop => <Dagverslagen showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/reportage" render={prop => <Reportage showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/analyse" render={prop => <Analyse showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route path="/" render={props => <Home showSideBar={this.showSideBar} hideSideBar={this.hideSideBar} {...props}/>}/>
                            </Switch>
                        </Sidebar.Pushable>
                    </Sidebar.Pushable>
                </div>
            </div>
        );
    }
}