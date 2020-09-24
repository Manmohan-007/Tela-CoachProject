import React, { Component } from 'react'

class NewsFeedForm extends Component {
    render() {
        return (

            <div className="news-feed-form">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">
                            <svg className="olymp-status-icon"><use xlinkHref="#olymp-status-icon" /></svg>
                            <span>Status</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link inline-items" data-toggle="tab" href="#profile-1" role="tab" aria-expanded="false">
                            <svg className="olymp-multimedia-icon"><use xlinkHref="#olymp-multimedia-icon" /></svg>
                            <span>Multimedia</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link inline-items" data-toggle="tab" href="#blog" role="tab" aria-expanded="false">
                            <svg className="olymp-blog-icon"><use xlinkHref="#olymp-blog-icon" /></svg>
                            <span>Blog Post</span>
                        </a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                        <form>
                            <div className="author-thumb">
                                <img loading="lazy" src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Share what you are thinking here...</label>
                                <textarea className="form-control" placeholder defaultValue={""} />
                            </div>
                            <div className="add-options-message">
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                                    <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="#olymp-camera-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                    <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                                    <svg className="olymp-small-pin-icon"><use xlinkHref="#olymp-small-pin-icon" /></svg>
                                </a>
                                <button className="btn btn-primary btn-md-2">Post Status</button>
                                <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
                        <form>
                            <div className="author-thumb">
                                <img loading="lazy" src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Share what you are thinking here...</label>
                                <textarea className="form-control" placeholder defaultValue={""} />
                            </div>
                            <div className="add-options-message">
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                                    <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="#olymp-camera-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                    <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                                    <svg className="olymp-small-pin-icon"><use xlinkHref="#olymp-small-pin-icon" /></svg>
                                </a>
                                <button className="btn btn-primary btn-md-2">Post Status</button>
                                <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                        <form>
                            <div className="author-thumb">
                                <img loading="lazy" src="img/author-page.jpg" alt="author" />
                            </div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Share what you are thinking here...</label>
                                <textarea className="form-control" placeholder defaultValue={""} />
                            </div>
                            <div className="add-options-message">
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                                    <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="#olymp-camera-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                                    <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon" /></svg>
                                </a>
                                <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                                    <svg className="olymp-small-pin-icon"><use xlinkHref="#olymp-small-pin-icon" /></svg>
                                </a>
                                <button className="btn btn-primary btn-md-2">Post Status</button>
                                <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default NewsFeedForm
