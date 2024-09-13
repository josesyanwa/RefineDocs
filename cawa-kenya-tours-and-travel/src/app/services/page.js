import Image from 'next/image';
import Link from 'next/link';
import OurServices from "@/components/OurServices/OurServices"

const Services = () => {
  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/magical-kenya-3.jpg" alt="Image" className="img-fluid" width={1920} height={1080} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">Services</h1>
              <p className="mb-5" data-aos="fade-up">Our curated selection of accommodations ensures that you can enjoy world-class amenities, exceptional service, and a true taste of Kenyan hospitality. Whether you are seeking a luxurious urban retreat, a coastal paradise, or an adventurous safari lodge, we have the perfect place for you.</p>
              {/* <div data-aos="fade-up">
                <a href="https://www.youtube.com/watch?v=5n-e6lOhVq0" className="play-button align-items-center d-flex glightbox3">
                  <span className="icon-button me-3">
                    <span className="icon-play"></span>
                  </span>
                  <span className="caption">Watch Video</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
        
      <OurServices />
      

      {/* Additional sections... */}

    </>
  );
}

export default Services

