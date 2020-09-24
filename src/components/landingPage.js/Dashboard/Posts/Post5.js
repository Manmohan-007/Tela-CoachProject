import React from 'react'

export default function Post5() {
    return (
        <article className="hentry blog-post">
            <div className="post-thumb">
                <img loading="lazy" src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg" alt="photo" width={369} height={259} />
            </div>
            <div className="post-content">
                <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                <a href="#" className="h4 post-title">Olympus’s family picnic was a success!</a>
                <p>Here’s a photo from last month’s photoshoot. We got really awesome shots for the new catalog.</p>
                <div className="author-date">
                    by
            <a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                    <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                            - 1 MONTH ago
              </time>
                    </div>
                </div>
                <div className="post-additional-info inline-items">
                    <div className="friends-harmonic-wrap">
                        <ul className="friends-harmonic">
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="icon" />
                                </a>
                            </li>
                        </ul>
                        <div className="names-people-likes">
                            67
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
