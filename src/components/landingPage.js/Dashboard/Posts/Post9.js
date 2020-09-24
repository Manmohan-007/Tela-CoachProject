import React, { Component } from 'react'

class Post9 extends Component {
    render() {
        return (
            <article className="hentry blog-post">
                <div className="post-thumb">
                    <img loading="lazy" src="img/post9.jpg" alt="photo" width={366} height={260} />
                </div>
                <div className="post-content">
                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                    <a href="#" className="h4 post-title">Check out this 10 yummy breakfast recipes</a>
                    <p>Here’s a photo from last month’s photoshoot. We got really awesome shots for the new catalog.</p>
                    <div className="author-date">
                        by
                <a className="h6 post__author-name fn" href="#">MADDY SIMMONS</a>
                        <div className="post__date">
                            <time className="published" dateTime="2017-03-24T18:18">
                                - 3 months ago
                  </time>
                        </div>
                    </div>
                    <div className="post-additional-info inline-items">
                        <div className="friends-harmonic-wrap">
                            <ul className="friends-harmonic">
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
                            </ul>
                            <div className="names-people-likes">
                                88
                  </div>
                        </div>
                        <div className="comments-shared">
                            <a href="#" className="post-add-icon inline-items">
                                <svg className="olymp-speech-balloon-icon">
                                    <use xlinkHref="#olymp-speech-balloon-icon" />
                                </svg>
                                <span>39</span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>

        )
    }
}

export default Post9
