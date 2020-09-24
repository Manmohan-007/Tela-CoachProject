import React from 'react'

export default function Post7() {
    return (
        <article className="hentry blog-post">
            <div className="post-thumb">
                <img loading="lazy" src="img/post7.jpg" alt="photo" width={367} height={261} />
            </div>
            <div className="post-content">
                <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                <a href="#" className="h4 post-title">Here are the best tattoos of our community</a>
                <p>Here’s a photo from last month’s photoshoot. We got really awesome shots for the new catalog.</p>
                <div className="author-date">
                    by
            <a className="h6 post__author-name fn" href="#">JACK SCORPIO</a>
                    <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                            - 2 MONTHS ago
              </time>
                    </div>
                </div>
                <div className="post-additional-info inline-items">
                    <div className="friends-harmonic-wrap">
                        <ul className="friends-harmonic">
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="img/icon-chat2.png" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="img/icon-chat4.png" alt="icon" />
                                </a>
                            </li>
                        </ul>
                        <div className="names-people-likes">
                            37
              </div>
                    </div>
                    <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                            <svg className="olymp-speech-balloon-icon">
                                <use xlinkHref="#olymp-speech-balloon-icon" />
                            </svg>
                            <span>62</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}
