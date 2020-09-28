import React, { Component } from 'react'

export class Socials extends Component {
    render() {
        return (
            <div className="widget w-socials">
                <h6 className="title">Other Social Networks:</h6>
                <a href="#" className="social-item bg-facebook">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
    Facebook
  </a>
                <a href="#" className="social-item bg-twitter">
                    <i className="fab fa-twitter" aria-hidden="true" />
    Twitter
  </a>
                <a href="#" className="social-item bg-dribbble">
                    <i className="fab fa-dribbble" aria-hidden="true" />
    Dribbble
  </a>
            </div>
        )
    }
}

export default Socials
