import React from "react";

export default function Header() {
    return (
        <div
            className="header--standard header--standard-landing"
            id="header--standard"
        >
            <div className="container">
                <div className="header--standard-wrap">
                    <a href="#" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src="" alt="Olympus" />
                            <img
                                loading="lazy"
                                src=""
                                alt="Olympus"
                                className="logo-colored"
                            />
                        </div>
                        <div className="title-block">
                            <h6 className="logo-title">olympus</h6>
                            <div className="sub-title">SOCIAL NETWORK</div>
                        </div>
                    </a>
                    <a href="#" className="open-responsive-menu js-open-responsive-menu">
                        <svg className="olymp-menu-icon">
                            <use xlinkHref="#olymp-menu-icon" />
                        </svg>
                    </a>
                    <div className="nav nav-pills nav1 header-menu">
                        <div className="mCustomScrollbar">
                            <ul>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Home
                  </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        data-hover="dropdown"
                                        data-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                        tabIndex={1}
                                    >
                                        Profile
                  </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Profile Page
                    </a>
                                        <a className="dropdown-item" href="#">
                                            Newsfeed
                    </a>
                                        <a className="dropdown-item" href="#">
                                            Post Versions
                    </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dropdown-has-megamenu">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-hover="dropdown"
                                        data-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                        tabIndex={1}
                                    >
                                        Forums
                  </a>
                                    <div className="dropdown-menu megamenu">
                                        <div className="row">
                                            <div className="col col-sm-3">
                                                <h6 className="column-tittle">Main Links</h6>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                          <span className="tag-label bg-blue-light">new</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                            </div>
                                            <div className="col col-sm-3">
                                                <h6 className="column-tittle">BuddyPress</h6>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                          <span className="tag-label bg-primary">HOT!</span>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                            </div>
                                            <div className="col col-sm-3">
                                                <h6 className="column-tittle">Corporate</h6>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                            </div>
                                            <div className="col col-sm-3">
                                                <h6 className="column-tittle">Forums</h6>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                                <a className="dropdown-item" href="#">
                                                    Profile Page
                        </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Terms &amp; Conditions
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Events
                  </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Privacy Policy
                  </a>
                                </li>
                                <li className="close-responsive-menu js-close-responsive-menu">
                                    <svg className="olymp-close-icon">
                                        <use xlinkHref="#olymp-close-icon" />
                                    </svg>
                                </li>
                                <li className="nav-item js-expanded-menu">
                                    <a href="#" className="nav-link">
                                        <svg className="olymp-menu-icon">
                                            <use xlinkHref="#olymp-menu-icon" />
                                        </svg>
                                        <svg className="olymp-close-icon">
                                            <use xlinkHref="#olymp-close-icon" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="shoping-cart more">
                                    <a href="#" className="nav-link">
                                        <svg className="olymp-shopping-bag-icon">
                                            <use xlinkHref="#olymp-shopping-bag-icon" />
                                        </svg>
                                        <span className="count-product">2</span>
                                    </a>
                                    <div className="more-dropdown shop-popup-cart">
                                        <ul>
                                            <li className="cart-product-item">
                                                <div className="product-thumb">
                                                    <img
                                                        loading="lazy"
                                                        src="img/product1.png"
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className="product-content">
                                                    <h6 className="title">White Enamel Mug</h6>
                                                    <ul className="rait-stars">
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="far fa-star star-icon"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                    </ul>
                                                    <div className="counter">x2</div>
                                                </div>
                                                <div className="product-price">$20</div>
                                                <div className="more">
                                                    <svg className="olymp-little-delete">
                                                        <use xlinkHref="#olymp-little-delete" />
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="cart-product-item">
                                                <div className="product-thumb">
                                                    <img
                                                        loading="lazy"
                                                        src="img/product2.png"
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className="product-content">
                                                    <h6 className="title">Olympus Orange Shirt</h6>
                                                    <ul className="rait-stars">
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="fa fa-star star-icon c-primary"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="far fa-star star-icon"
                                                                aria-hidden="true"
                                                            />
                                                        </li>
                                                    </ul>
                                                    <div className="counter">x1</div>
                                                </div>
                                                <div className="product-price">$40</div>
                                                <div className="more">
                                                    <svg className="olymp-little-delete">
                                                        <use xlinkHref="#olymp-little-delete" />
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="cart-subtotal">
                                            Cart Subtotal:<span>$80</span>
                                        </div>
                                        <div className="cart-btn-wrap">
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Go to Your Cart
                      </a>
                                            <a href="#" className="btn btn-purple btn-sm">
                                                Go to Checkout
                      </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-search-item">
                                    <a
                                        href="#"
                                        className="nav-link"
                                        data-toggle="modal"
                                        data-target="#main-popup-search"
                                    >
                                        <svg className="olymp-magnifying-glass-icon">
                                            <use xlinkHref="#olymp-magnifying-glass-icon" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
