import React, { Component } from 'react'

class Post8 extends Component {
    render() {
        return (
            <article className="hentry blog-post">
                <div className="post-thumb">
                    <img loading="lazy" src="img/post8.jpg" alt="photo" width={368} height={260} />
                </div>
                <div className="post-content">
                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                    <a href="#" className="h4 post-title">Take a look to the coolest beaches of the world</a>
                    <p>Here’s a photo from last month’s photoshoot. We got really awesome shots for the new catalog.</p>
                    <div className="author-date">
                        by
                <a className="h6 post__author-name fn" href="#">MADDY SIMMONS</a>
                        <div className="post__date">
                            <time className="published" dateTime="2017-03-24T18:18">
                                - 2 months ago
                  </time>
                        </div>
                    </div>
                    <div className="post-additional-info inline-items">
                        <div className="friends-harmonic-wrap">
                            <ul className="friends-harmonic">
                                <li>
                                    <a href="#">
                                        <img loading="lazy" src="img/icon-chat26.png" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img loading="lazy" src="img/icon-chat25.png" alt="icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img loading="lazy" src="img/icon-chat21.png" alt="icon" />
                                    </a>
                                </li>
                            </ul>
                            <div className="names-people-likes">
                                104
                  </div>
                        </div>
                        <div className="comments-shared">
                            <a href="#" className="post-add-icon inline-items">
                                <svg className="olymp-speech-balloon-icon">
                                    <use xlinkHref="#olymp-speech-balloon-icon" />
                                </svg>
                                <span>84</span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>

        )
    }
}

export default Post8
