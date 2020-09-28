import React, { Component } from 'react'
import Personalinfo1 from '../../components/AboutMe/widgets/Personalinfo1'
import Personalinfo2 from '../../components/AboutMe/widgets/Personalinfo2'
import Personalinfo3 from '../../components/AboutMe/widgets/Personalinfo3'
import Personalinfo4 from '../../components/AboutMe/widgets/Personalinfo4'
import Personalinfo5 from '../../components/AboutMe/widgets/Personalinfo5'
import Socials from '../../components/AboutMe/widgets/Socials'
import LeftPanel from "../../components/landingPage.js/Dashboard/HeaderNav/leftPanel"
import LeftPanelResponsive from "../../components/landingPage.js/Dashboard/HeaderNav/leftPanelResponsive"
import HeaderBP from "../../components/landingPage.js/Dashboard/HeaderNav/HeaderBP"
import HeaderBPRes from "../../components/landingPage.js/Dashboard/HeaderNav/HeaderBPRes"
import ProfileSection from "../../components/AboutMe/ProfileComp/Profilesection"


export class Aboutme extends Component {
    render() {
        return (
            <div>
                <LeftPanel />
                <LeftPanelResponsive />
                <HeaderBP title={"Profile Page"} />
                <HeaderBPRes />
                <div className="header-spacer" />
                <ProfileSection />
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                            {/* <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Hobbies and Interests</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <div className="ui-block-content">
                                    <div className="row">
                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                            <Personalinfo1 />
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                            <Personalinfo2 />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Education and Employement</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <div className="ui-block-content">
                                    <div className="row">
                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                            <Personalinfo3 />
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                            <Personalinfo4 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Personal Info</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <div className="ui-block-content">
                                    <Personalinfo5 />
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme
