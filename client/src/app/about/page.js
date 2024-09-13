import Image from 'next/image';
import Link from 'next/link';
import AboutUs from "@/components/AboutUs/AboutUs";

const About = () => {
  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/magical-kenya-3.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">About Us</h1>
              <p className="mb-5" data-aos="fade-up">Discover the world with CAWA Tours and Travels! At CAWA, we specialize in creating unforgettable travel experiences tailored just for you.</p>
              
                                                          
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

      {/* <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="image-stack mb-5 mb-lg-0">
                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                  <Image src="/images/img_v_1.jpg" alt="Image" width={500} height={300} />
                </div>
                <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                  <Image src="/images/img_v_2.jpg" alt="Image" width={500} height={300} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div>
                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore All Corners of The World With Us</h2>
                <p data-aos="fade-up" data-aos-delay="200">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p data-aos="fade-up" data-aos-delay="300">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                  <Link href="#" className="btn btn-primary">Read more</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <AboutUs />

      {/* Add the rest of the sections here, following the same pattern */}
      {/* ... */}

    </>
  );
}

export default About