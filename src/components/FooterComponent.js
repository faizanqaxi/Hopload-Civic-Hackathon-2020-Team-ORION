import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-2">
                        <p>Covid19 Information</p>
                    </div>
                    <div className="col-4 col-sm-2">
                        <p>Contact Us</p>
                    </div>
                    <div className="col-4 col-sm-2">
                        <p>About Us</p>
                    </div>
                    <div className="col-4 col-sm-2">
                        <p>Privacy Policy</p>
                        <p>© Copyright 2020 Team ORION</p>
                    </div>

                    <div className="col-12 col-sm-4">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a> PlayStore
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a> AppStore
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a> FACEBOOK
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a> TWITTER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;