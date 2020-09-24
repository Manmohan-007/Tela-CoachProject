import React, { Component } from 'react'

class FriendsPageEdit extends Component {
    render() {
        return (
            <ul className="widget w-friend-pages-added notification-list friend-requests">
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">The Marina Bar</a>
                        <span className="chat-message-item">Restaurant / Bar</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="img/avatar42-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Tapronus Rock</a>
                        <span className="chat-message-item">Rock Band</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="img/avatar43-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Pixel Digital Design</a>
                        <span className="chat-message-item">Company</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="img/avatar44-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                        <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="img/avatar45-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Crimson Agency</a>
                        <span className="chat-message-item">Company</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="img/avatar46-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Mannequin Angel</a>
                        <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
                        <a href="#">
                            <svg className="olymp-star-icon"><use xlinkHref="#olymp-star-icon" /></svg>
                        </a>
                    </span>
                </li>
            </ul>

        )
    }
}

export default FriendsPageEdit
