import React from 'react'

export default function UpdateHeaderPic() {
    return (
        <div className="modal fade" id="update-header-photo" tabIndex={-1} role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">
            <div className="modal-dialog window-popup update-header-photo" role="document">
                <div className="modal-content">
                    <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                        <svg className="olymp-close-icon"><use xlinkHref="#olymp-close-icon" /></svg>
                    </a>
                    <div className="modal-header">
                        <h6 className="title">Update Header Photo</h6>
                    </div>
                    <div className="modal-body">
                        <a href="#" className="upload-photo-item">
                            <svg className="olymp-computer-icon"><use xlinkHref="#olymp-computer-icon" /></svg>
                            <h6>Upload Photo</h6>
                            <span>Browse your computer.</span>
                        </a>
                        <a href="#" className="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">
                            <svg className="olymp-photos-icon"><use xlinkHref="#olymp-photos-icon" /></svg>
                            <h6>Choose from My Photos</h6>
                            <span>Choose from your uploaded photos</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
