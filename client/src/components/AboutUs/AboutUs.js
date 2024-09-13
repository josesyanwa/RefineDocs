// components/AboutUs.js
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="section section-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="image-stack mb-5 mb-lg-0">
              <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                <Image src="/images/img_v_1.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
              </div>
              <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                <Image src="/images/masaai.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-1">
            <div>
              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore Kenya with CAWA Kenya Tours & Travels</h2>
              
              <p data-aos="fade-up" data-aos-delay="200">
                 We provide exceptional experiences, from Maasai Mara tours and luxury safaris to tailored travel packages. Whether booking a safari or seeking a Kenya safari guide, our team ensures an unforgettable adventure. Discover national parks, cultural tours, and more with CAWA Kenya Tours.
                </p>

                <strong>OUR MISSION</strong>
                <p data-aos="fade-up" data-aos-delay="300">
                   Our job is to make your life easier by taking care of all your travel needs. We specialize in:
                </p>
                <ul className="custom-list">
                  <li>Booking accommodation in hotels and Airbnbs across the country</li>
                  <li>Securing air tickets for your travels</li>
                   <li>Arranging transport to and from the airport</li>
                  <li>Providing vetted tour guides to ensure your safety and enjoyment while in Kenya</li>
                </ul>
               <p>
                  Let us handle the details so you can focus on what matters most.
                </p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                {/* <Link href="/about" className="btn btn-primarys">Read more</Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
