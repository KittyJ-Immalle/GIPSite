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
import ITTapa from "./content/it-tapa.js";
import FAQ from "./content/faq.js";
import Dankmail from "./content/dankmail.js";

import WatIsOneNote from "./content/it-tapa-content/wat-is-onenote.js";
import WatMetOneNoteDoen from "./content/it-tapa-content/wat-met-onenote-doen.js";
import WaarOneNoteGebruiken from "./content/it-tapa-content/waar-onenote-gebruiken.js";
import VerschilOneNoteEnOneNote2016 from "./content/it-tapa-content/verschil-onenote-onenote2016.js";
import PersoonlijkeNotitieblok from "./content/it-tapa-content/persoonlijke-notitieblok.js";
import Inloggen from "./content/it-tapa-content/inloggen.js";
import HoeGebruikenOneNote from "./content/it-tapa-content/hoe-gebruiken-onenote.js";
import UitlegOpmaakUitlijning from "./content/it-tapa-content/uitleg-opmaak-uitlijning.js";
import KlasnotitieblokDownloaden from "./content/it-tapa-content/klasnotitieblok-downloaden.js";
import SectiesAanmaken from "./content/it-tapa-content/secties-aanmaken.js";
import LinksDistribueren from "./content/it-tapa-content/links-distribueren.js";
import TipsTricks from "./content/it-tapa-content/tips-tricks.js";


const backdrops = {
    "BEACH": "beach",
    "DAWN": "dawn",
    "DONUT": "donut",
    "SAILBOATS": "sailboats",
    "SKYLINE": "skyline",
    "BOATS": "boats",
    "PARK": "park",
    "BUDAPEST": "budapest",
    "LANDSCAPE": "landscape"
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
        this.setState({backgroundClass: backdrops.LANDSCAPE})
    }

    selectCaseStudyTwo() {
        this.props.history.replace("/case-study-two");
        this.setState({backgroundClass: backdrops.PARK})
    }

    selectBedrijfseconomischeAnalyse() {
        this.props.history.replace("/bedrijfseconomische-analyse");
        this.setState({backgroundClass: backdrops.BUDAPEST})
    }

    selectITTapa() {
        this.props.history.replace("/it-tapa");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectFAQ() {
        this.props.history.replace("/faq");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectWatIsOneNote() {
        this.props.history.replace("/wat-is-onenote");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectWatMetOneNoteDoen() {
        this.props.history.replace("/wat-kan-je-met-onenote-doen");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectWaarOneNoteGebruiken() {
        this.props.history.replace("/waar-kunnen-we-onenote-gebruiken");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectVerschilOneNoteEnOneNote2016() {
        this.props.history.replace("/verschil-onenote-en-onenote-2016");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectPersoonlijkeNotitieblok() {
        this.props.history.replace("/persoonlijke-notitieblok");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectInloggen() {
        this.props.history.replace("/inloggen");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectHoeGebruikenOneNote() {
        this.props.history.replace("/hoe-gebruik-je-onenote");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectUitlegOpmaakUitlijning() {
        this.props.history.replace("/uitleg-opmaak-uitlijning");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectKlasnotitieblokDownloaden() {
        this.props.history.replace("/klasnotitieblok-downloaden");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectSectiesAanmaken() {
        this.props.history.replace("/secties-aanmaken");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectLinksDistribueren() {
        this.props.history.replace("/links-naar-pagina-distribueren-personen");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectTipsTricks() {
        this.props.history.replace("/tips-tricks");
        this.setState({backgroundClass: backdrops.SKYLINE})
    }

    selectDankmail() {
        this.props.history.replace("/dankmail");
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
                            selectITTapa={this.selectITTapa.bind(this)}
                        />
                        <RightSideBar
                            visible={this.state.visible}
                            hideSidebar={this.hideSideBar}
                            selectFAQ={this.selectFAQ.bind(this)}
                            selectDankmail={this.selectDankmail.bind(this)}
                        />
                        <Sidebar.Pushable>
                            <Switch>
                                <Route exact path="/dankmail" render={prop => <Dankmail showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/tips-tricks" render={prop => <TipsTricks showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/links-naar-pagina-distribueren-personen" render={prop => <LinksDistribueren showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/secties-aanmaken" render={prop => <SectiesAanmaken showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/klasnotitieblok-downloaden" render={prop => <KlasnotitieblokDownloaden showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/uitleg-opmaak-uitlijning" render={prop => <UitlegOpmaakUitlijning showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/hoe-gebruik-je-onenote" render={prop => <HoeGebruikenOneNote showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/inloggen" render={prop => <Inloggen showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/persoonlijke-notitieblok" render={prop => <PersoonlijkeNotitieblok showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/verschil-onenote-en-onenote-2016" render={prop => <VerschilOneNoteEnOneNote2016 showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/waar-kunnen-we-onenote-gebruiken" render={prop => <WaarOneNoteGebruiken showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/wat-kan-je-met-onenote-doen" render={prop => <WatMetOneNoteDoen showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/wat-is-onenote" render={prop => <WatIsOneNote showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/faq" render={prop => <FAQ showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
                                <Route exact path="/it-tapa" render={prop => <ITTapa showSideBar = {this.showSideBar.bind(this)} hideSideBar={this.hideSideBar.bind(this)}/>}/>
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