import React, { Component } from 'react'

class FriendsPageEditSuggest extends Component {
    render() {
        return (
            <ul className="widget w-friend-pages-added notification-list friend-requests">
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="" className="h6 notification-friend">Node js Course</a>
                        <span className="chat-message-item">Web development</span>
                    </div>

                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="#" className="h6 notification-friend">Adobe Photoshop</a>
                        <span className="chat-message-item">Designing</span>
                    </div>

                </li>
                <li className="inline-items">
                    <div className="author-thumb">
                        <img loading="lazy" src="https://cdn.telanganatoday.com/wp-content/uploads/2020/05/Algorithms.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                        <a href="" className="h6 notification-friend">Algorithms</a>
                        <span className="chat-message-item">Programming</span>
                    </div>

                </li>
            </ul>

        )
    }
}

export default FriendsPageEditSuggest
