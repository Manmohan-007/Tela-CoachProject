import React, { Component } from 'react'

class ChatResponsive extends Component {
    render() {
        return (
            <div className="ui-block popup-chat popup-chat-responsive" tabIndex={-1} role="dialog" aria-labelledby="popup-chat-responsive" aria-hidden="true">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="icon-status online" />
                        <h6 className="title">Chat</h6>
                        <div className="more">
                            <svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg>
                            <svg className="olymp-little-delete js-chat-open"><use xlinkHref="#olymp-little-delete" /></svg>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="mCustomScrollbar">
                            <ul className="notification-list chat-message chat-message-field">
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar14-sm.jpg" alt="author" className="mCS_img_loaded" />
                                    </div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/author-page.jpg" alt="author" className="mCS_img_loaded" />
                                    </div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">Don’t worry Mathilda!</span>
                                        <span className="chat-message-item">I already bought everything</span>
                                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author-thumb">
                                        <img loading="lazy" src="img/avatar14-sm.jpg" alt="author" className="mCS_img_loaded" />
                                    </div>
                                    <div className="notification-event">
                                        <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                                        <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <form className="need-validation">
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Press enter to post..." defaultValue={""} />
                                <div className="add-options-message">
                                    <a href="#" className="options-message">
                                        <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon" /></svg>
                                    </a>
                                    <div className="options-message smile-block">
                                        <svg className="olymp-happy-sticker-icon"><use xlinkHref="#olymp-happy-sticker-icon" /></svg>
                                        <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat1.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat2.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat3.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat4.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat5.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat6.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat7.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat8.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat9.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat10.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat11.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat12.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat13.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat14.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat15.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat16.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat17.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat18.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat19.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat20.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat21.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat22.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat23.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat24.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat25.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat26.png" alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img loading="lazy" src="img/icon-chat27.png" alt="icon" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default ChatResponsive
