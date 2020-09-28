import React, { Component } from 'react'
import Logo from "../../../../Logo/TLogo.jpg"
class leftPanel extends Component {
    state = {
        showPanel: false
    }
    toggleLeftPanel = () => {

        this.setState({

            showPanel: !this.state.showPanel
        })



    }



    render() {
        return (
            <div className="fixed-sidebar">
                <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
                    <a href="02-ProfilePage.html" className="logoDash logo">
                        <div className="img-wrap1">
                            <img loading="lazy" src={Logo} alt="Olympus" />
                        </div>
                    </a>
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <ul className="left-menu">
                            <li onClick={this.toggleLeftPanel}>
                                <a className="js-sidebar-open">
                                    <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="OPEN MENU"><use xlinkHref="#olymp-menu-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="#olymp-newsfeed-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="#olymp-star-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="#olymp-happy-faces-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="#olymp-headphones-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="#olymp-weather-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="#olymp-calendar-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="#olymp-badge-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="#olymp-stats-icon" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="#olymp-manage-widgets-icon" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`fixed-sidebar-left sidebar--large  ${this.state.showPanel ? "showLarge" : null} `} id="sidebar-left-1">
                    <a href="/dashboard" className="logoWrapper">
                        <div className="img-wrap">
                            <img loading="lazy" src={Logo} alt="Olympus" className="logoMainDiv" />
                        </div>
                        {/* <div className="title-block">
                            <h6 className="logo-title">olympus</h6>
                        </div> */}
                    </a>
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <ul className="left-menu">
                            <li onClick={this.toggleLeftPanel}>
                                <a href="#" className="js-sidebar-open">
                                    <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="#olymp-close-icon" /></svg>
                                    <span className="left-menu-title">Collapse Menu</span>
                                </a>
                            </li>
                            <li>
                                <a href="/login">
                                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="#olymp-newsfeed-icon" /></svg>
                                    <span className="left-menu-title">Login</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="#olymp-star-icon" /></svg>
                                    <span className="left-menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="#olymp-happy-faces-icon" /></svg>
                                    <span className="left-menu-title">My Services & Price</span>
                                </a>
                            </li>
                            <li>
                                <a href="/aboutme">
                                    <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="#olymp-headphones-icon" /></svg>
                                    <span className="left-menu-title">About me</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="#olymp-weather-icon" /></svg>
                                    <span className="left-menu-title">List Review</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="#olymp-calendar-icon" /></svg>
                                    <span className="left-menu-title">Calender</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="#olymp-badge-icon" /></svg>
                                    <span className="left-menu-title">View Book / Request Session</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                    <span className="left-menu-title">Payment Histories</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                    <span className="left-menu-title">Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                    <span className="left-menu-title">Community Room</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                    <span className="left-menu-title">Add Social Links</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                                    <span className="left-menu-title">Settings</span>
                                </a>
                            </li>






                            {/* <li>
                                <a href="/dashboard">
                                    <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="#olymp-stats-icon" /></svg>
                                    <span className="left-menu-title">Account Stats</span>
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="/dashboard">
                                    <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="#olymp-manage-widgets-icon" /></svg>
                                    <span className="left-menu-title">Manage Widgets</span>
                                </a>
                            </li> */}
                        </ul>
                        {/* <div className="profile-completion">
                            <div className="skills-item">
                                <div className="skills-item-info">
                                    <span className="skills-item-title">Profile Completion</span>
                                    <span className="skills-item-count"><span className="count-animate" data-speed={1000} data-refresh-interval={50} data-to={76} data-from={0} /><span className="units">76%</span></span>
                                </div>
                                <div className="skills-item-meter">
                                    <span className="skills-item-meter-active bg-primary" style={{ width: '76%' }} />
                                </div>
                            </div>
                            <span>Complete <a href="#">your profile</a> so people can know more about you!</span>
                        </div> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default leftPanel
