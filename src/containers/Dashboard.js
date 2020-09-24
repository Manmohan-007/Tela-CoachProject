import React, { Component } from 'react'
import CommentForm from '../components/landingPage.js/Dashboard/Comments/CommentForm'
import Comments from '../components/landingPage.js/Dashboard/Comments/comments'
import HeaderBP from '../components/landingPage.js/Dashboard/HeaderNav/HeaderBP'
import HeaderBPRes from '../components/landingPage.js/Dashboard/HeaderNav/HeaderBPRes'
import LeftPanel from "../components/landingPage.js/Dashboard/HeaderNav/leftPanel"
import LeftPanelResponsive from '../components/landingPage.js/Dashboard/HeaderNav/leftPanelResponsive'
import RightPanel from '../components/landingPage.js/Dashboard/HeaderNav/RightPanel'
import RightPanelRes from '../components/landingPage.js/Dashboard/HeaderNav/RightPanelRes'
import NewsFeedForm from '../components/landingPage.js/Dashboard/NewsFeed/NewsFeedForm'
import Post5 from '../components/landingPage.js/Dashboard/Posts/Post5'
import Post6 from '../components/landingPage.js/Dashboard/Posts/Post6'
import Post7 from '../components/landingPage.js/Dashboard/Posts/Post7'
import Post8 from '../components/landingPage.js/Dashboard/Posts/Post8'
import Post9 from "../components/landingPage.js/Dashboard/Posts/Post9"
import Weather from '../components/landingPage.js/Dashboard/Widgets/weather'
import Calender from "../components/landingPage.js/Dashboard/Widgets/Calender"
import FriendsPageEdit from '../components/landingPage.js/Dashboard/Widgets/FriendsPageEdit'
import BirthDayAlert from '../components/landingPage.js/Dashboard/Widgets/BirthDayAlert'
import FriendsPageEditSuggest from '../components/landingPage.js/Dashboard/Widgets/FriendsPageEditSuggest'
import ActivityFeed from '../components/landingPage.js/Dashboard/Widgets/ActivityFeed'
import WidgetAction from '../components/landingPage.js/Dashboard/Widgets/WidgetAction'
import UpdateHeaderPic from '../components/landingPage.js/Dashboard/PopUps/UpdateheaderPic'
import ChoosePic from '../components/landingPage.js/Dashboard/PopUps/ChoosePic'
import BackToTop from '../components/landingPage.js/Dashboard/BackToTop/BackToTop'
import ChatResponsive from '../components/landingPage.js/Dashboard/PopUps/ChatResponsive'
class Dashboard extends Component {
    render() {
        return (
            <div>

                <LeftPanel />
                <LeftPanelResponsive />
                <RightPanel />
                <RightPanelRes />
                <HeaderBP />
                <HeaderBPRes />
                <div className="header-spacer" />
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <NewsFeedForm />
                            </div>
                            <div id="newsfeed-items-grid">
                                <div className="ui-block">
                                    <Post5 />
                                </div>
                                <div className="ui-block">
                                    <Post6 />
                                    <Comments />
                                    <a href="#" className="more-comments">View more comments <span>+</span></a>
                                    <CommentForm />
                                </div>
                                <div className="ui-block">
                                    <Post7 />
                                </div>
                                <div className="ui-block">
                                    <Post8 />
                                </div>
                                <div className="ui-block">
                                    <Post9 />
                                </div>
                            </div>
                            <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                        </main>
                        {/* ... end Main Content */}
                        {/* Left Sidebar */}
                        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="ui-block">
                                <Weather />
                            </div>
                            <div className="ui-block">
                                <Calender />
                            </div>
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Pages You May Like</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <FriendsPageEdit />
                            </div>
                        </aside>
                        {/* ... end Left Sidebar */}
                        {/* Right Sidebar */}
                        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="ui-block">
                                <BirthDayAlert />
                            </div>
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Friend Suggestions</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <FriendsPageEditSuggest />
                            </div>
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Activity Feed</h6>
                                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </div>
                                <ActivityFeed />
                            </div>
                            <div className="ui-block">
                                <WidgetAction />
                            </div>
                        </aside>
                        {/* ... end Right Sidebar */}
                    </div>
                </div>
                <UpdateHeaderPic />
                <ChoosePic />
                <BackToTop />
                <ChatResponsive />
            </div>
        )
    }
}

export default Dashboard
