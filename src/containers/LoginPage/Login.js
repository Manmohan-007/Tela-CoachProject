import React, {Component} from "react";
import Header from "../../components/landingPage.js/Header/Header";
import Register from "../../components/landingPage.js/Register-login-form/Register";
import WindowSearch from "../../components/landingPage.js/Windows-popup/WindowMainSearch";
import WindowResPass from "../../components/landingPage.js/Windows-popup/WindowResPass";
class Login extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="content-bg-wrap" />
        <Header />
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>
                  We are the best and biggest social network with 5 billion
                  active users all around the world. Share you thoughts, write
                  blog posts, show your favourite music via Stopify, earn badges
                  and much more!
                </p>
                <a href="#" className="btn btn-md btn-border c-white">
                  Register Now!
                </a>
              </div>
            </div>
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <Register />
            </div>
          </div>
        </div>
        <WindowSearch />
        <WindowResPass />
      </div>
    );
  }
}

export default Login;
