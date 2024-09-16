import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About RefineDocs<span className="text-primary">.</span></h3>
              <p>RefineDocs is an AI-powered document assistant that helps you improve your writing by providing smart suggestions for clarity, grammar, and style.</p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled iconiics">
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaPinterest /></a></li>
                <li><a href="#"><FaDribbble /></a></li>
              </ul>
            </div>
          </div>


          <div className="col-lg-2">
            <div className="widget">
              <h3>Company</h3>
              <ul className="list-unstyled float-left links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/document">Document</Link></li>
                <li><Link href="/signin">Sign In</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Contacts</h3>
              <address>The Mirage, Waiyaki Way, Westlands, Nairobi</address>
              <ul className="list-unstyled links mb-4">
                <li><a >+254 712 345 678</a></li>
                <li>myproject.refinedocs@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mbb-0">Copyright &copy; {new Date().getFullYear()} All Rights Reserved. &mdash; Designed by <a href="##" >Joses Wasike</a> </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
