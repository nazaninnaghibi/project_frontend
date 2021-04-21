import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './Footer.css'
import facebooik from '../../img/32.png'
import instagram from '../../img/i.png'

const Footer = () => {
const style1="background-color: rgba(0, 0, 0, 0.2)";
    return (
        <div >

            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h4>Heading 1</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Payment Center</a></li>
                                        <li><a href="#">Contact Directory</a></li>
                                        <li><a href="#">Forms</a></li>
                                        <li><a href="#">News and Updates</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="#"><img  src={facebooik}/> </a></li>
                                    <li><a href="#"><img  src={instagram}/> </a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2018 - Company Name. All rights
                                    reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;