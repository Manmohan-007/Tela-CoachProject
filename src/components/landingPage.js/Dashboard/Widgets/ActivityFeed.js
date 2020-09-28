import React from 'react'

export default function ActivityFeed() {
    return (
        <ul className="widget w-activity-feed notification-list">
            <li>
                <div className="author-thumb">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="author" />
                </div>
                <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Marin Polson</a> commented on <a href="#" className="notification-link">Node Js Course.</a>.
      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 mins ago</time></span>
                </div>
            </li>
            <li>
                <div className="author-thumb">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="author" />
                </div>
                <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Jake Parker </a> liked <a href="#" className="notification-link">React course.</a>.
      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">5 mins ago</time></span>
                </div>
            </li>
            <li>
                <div className="author-thumb">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1585925130019-eeafcd31b7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="author" />
                </div>
                <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Mary Jane Stark </a> commented on  <a href="#" className="notification-link">Algorithm Course.</a>.
      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">12 mins ago</time></span>
                </div>
            </li>
            <li>
                <div className="author-thumb">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="author" />
                </div>
                <div className="notification-event">
                    <a href="#" className="h6 notification-friend">Nicholas Grissom </a> given a review on <a href="#" className="notification-link">photoshop Course</a>.
      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hour ago</time></span>
                </div>
            </li>





        </ul>

    )
}
