import React, { Component } from 'react'

class BirthDayAlert extends Component {
    render() {
        return (
            <div className="widget w-birthday-alert">
                <div className="icons-block">
                    <svg className="olymp-cupcake-icon"><use xlinkHref="#olymp-cupcake-icon" /></svg>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                </div>
                <div className="content">
                    <div className="author-thumb">
                        <img loading="lazy" src="" alt="author" />
                    </div>
                    <span>Today is</span>
                    <a href="#" className="h4 title">Marina Valentine’s Birthday!</a>
                    <p>Leave her a message with your best wishes on her profile page!</p>
                </div>
            </div>
        )
    }
}

export default BirthDayAlert
