import React, { Component } from 'react'

class CommentForm extends Component {
    render() {
        return (
            <form className="comment-form inline-items">
                <div className="post__author author vcard inline-items">
                    <img loading="lazy" src="img/author-page.jpg" alt="author" />
                    <div className="form-group with-icon-right ">
                        <textarea className="form-control" placeholder defaultValue={""} />
                        <div className="add-options-message">
                            <a href="#" className="options-message" data-toggle="modal" data-target="#update-header-photo">
                                <svg className="olymp-camera-icon">
                                    <use xlinkHref="#olymp-camera-icon" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="btn btn-md-2 btn-primary">Post Comment</button>
                <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>
            </form>

        )
    }
}

export default CommentForm
