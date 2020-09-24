import React from 'react'

export default function ChoosePic() {
    return (
        <div className="modal fade" id="choose-from-my-photo" tabIndex={-1} role="dialog" aria-labelledby="choose-from-my-photo" aria-hidden="true">
            <div className="modal-dialog window-popup choose-from-my-photo" role="document">
                <div className="modal-content">
                    <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                        <svg className="olymp-close-icon"><use xlinkHref="#olymp-close-icon" /></svg>
                    </a>
                    <div className="modal-header">
                        <h6 className="title">Choose from My Photos</h6>
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                                    <svg className="olymp-photos-icon"><use xlinkHref="#olymp-photos-icon" /></svg>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                                    <svg className="olymp-albums-icon"><use xlinkHref="#olymp-albums-icon" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-body">
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane active" id="home" role="tabpanel" aria-expanded="true">
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo1.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo2.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo3.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo4.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo5.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo6.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo7.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo8.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <div className="choose-photo-item">
                                    <div className="radio">
                                        <label className="custom-radio">
                                            <img loading="lazy" src="img/choose-photo9.jpg" alt="photo" />
                                            <input type="radio" name="optionsRadios" />
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                <a href="#" className="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>
                            </div>
                            <div className="tab-pane" id="profile" role="tabpanel" aria-expanded="false">
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo10.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">South America Vacations</a>
                                            <span>Last Added: 2 hours ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo11.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">Photoshoot Summer 2016</a>
                                            <span>Last Added: 5 weeks ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo12.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">Amazing Street Food</a>
                                            <span>Last Added: 6 mins ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo13.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">Graffity &amp; Street Art</a>
                                            <span>Last Added: 16 hours ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo14.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">Amazing Landscapes</a>
                                            <span>Last Added: 13 mins ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="choose-photo-item">
                                    <figure>
                                        <img loading="lazy" src="img/choose-photo15.jpg" alt="photo" />
                                        <figcaption>
                                            <a href="#">The Majestic Canyon</a>
                                            <span>Last Added: 57 mins ago</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                <a href="#" className="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
