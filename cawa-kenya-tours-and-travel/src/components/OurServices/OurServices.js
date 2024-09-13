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
          <div className="col-lg-9">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/hotel.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Hotel and Airbnb Booking</h3>
                    <p>Find the perfect place to stay in Kenya with our hotel and Airbnb booking services, offering comfort and convenience for every traveler.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/animals.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Safari Tours</h3>
                    <p>Discover Kenya wildlife with our safari tours, including Maasai Mara tours and luxury safaris, tailored for an unforgettable adventure.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/culture.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Cultural Tours</h3>
                    <p>Experience Kenya rich heritage through our cultural tours, showcasing local traditions and vibrant customs.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/beach.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Beach Holidays</h3>
                    <p>Enjoy relaxing Kenya beach holidays with beautiful shores and luxurious resorts for a perfect coastal escape.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/friends.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Tour Guides and Tour Buddies</h3>
                    <p>Get the most out of your trip with expert tour guides and friendly tour buddies who enhance your Kenyan adventure.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/plane.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Airport Transfer</h3>
                    <p>Seamlessly travel to and from the airport with our reliable airport transfer services, ensuring a smooth start and end to your journey.</p>
                  </div>
                </div>
              </div>

              {/* <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/03.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Travel Insurance</h3>
                    <p> Travel with peace of mind knowing you are covered by our comprehensive travel insurance.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/03.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Travel Insurance</h3>
                    <p> Travel with peace of mind knowing you are covered by our comprehensive travel insurance.</p>
                  </div>
                </div>
              </div> */}

              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/book.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Flight Bookings and Travel Insurance</h3>
                    <p>Book your flights and secure travel insurance effortlessly, ensuring a worry-free journey to and within Kenya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
