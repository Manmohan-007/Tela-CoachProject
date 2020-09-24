import React from 'react'

export default function Post6() {
    return (
        <article className="hentry blog-post">
            <div className="post-thumb">
                <img loading="lazy" src="https://www.disruptorleague.com/wp-content/uploads/2018/07/Road-to-Horizon.jpg" alt="photo" width={369} height={261} />
            </div>
            <div className="post-content">
                <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                <a href="#" className="h4 post-title">Olympians: Journal of my backpacking days</a>
                <p>Here’s a photo from last month’s photoshoot. We got really awesome shots for the new catalog.</p>
                <div className="author-date">
                    by
            <a className="h6 post__author-name fn" href="#">JAMES SPIEGEL</a>
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
                                    <img loading="lazy" src="data:image/jpeg;base64,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" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="https://media1.popsugar-assets.com/files/thumbor/o5lHHUQ5JXR3EKTTv9pCgIw22tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/19/813/n/1922283/tmp_KdlTb4_5f0aefacc3088515_MCDHAPO_EC587.jpg" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img loading="lazy" src="https://media1.popsugar-assets.com/files/thumbor/o5lHHUQ5JXR3EKTTv9pCgIw22tc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/19/813/n/1922283/tmp_KdlTb4_5f0aefacc3088515_MCDHAPO_EC587.jpg" alt="icon" />
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
                            <span>53</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>

    )
}
