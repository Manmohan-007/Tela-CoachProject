import React, { Component } from 'react'

class comments extends Component {
    render() {
        return (

            <ul className="comments-list">
                <li className="comment-item">
                    <div className="post__author author vcard inline-items">
                        <img loading="lazy" src="img/author-page.jpg" alt="author" />
                        <div className="author-date">
                            <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                            <div className="post__date">
                                <time className="published" dateTime="2004-07-24T18:18">
                                    38 mins ago
          </time>
                            </div>
                        </div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="#olymp-heart-icon" /></svg>
                        <span>3</span>
                    </a>
                    <a href="#" className="reply">Reply</a>
                </li>
                <li className="comment-item">
                    <div className="post__author author vcard inline-items">
                        <img loading="lazy" src="img/avatar1-sm.jpg" alt="author" />
                        <div className="author-date">
                            <a className="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                            <div className="post__date">
                                <time className="published" dateTime="2004-07-24T18:18">
                                    1 hour ago
          </time>
                            </div>
                        </div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                    </div>
                    <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
    </p>
                    <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="#olymp-heart-icon" /></svg>
                        <span>8</span>
                    </a>
                    <a href="#" className="reply">Reply</a>
                </li>
            </ul>


        )
    }
}

export default comments
