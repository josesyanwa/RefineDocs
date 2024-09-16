// components/OurServices.js
import Image from 'next/image';
import Link from 'next/link';

const OurServices = () => {
  return (
    <div className="section service-section-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>Our <span className="d-block">Services</span></h2>
              <p>Welcome to CAWA Kenya Tours and Travels, your gateway to the heart of Africa.</p>
              {/* <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                <Link href="/services" className="btn btn-primary">View All</Link>
              </p> */}
            </div>
          </div>
          
              
        </div>
      </div>
    </div>
  );
};

export default OurServices;
