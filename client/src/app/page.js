import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


const Home = () => {
  return (
    <main style={{ marginTop: '-56px' }}>


      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/refinedocs-1.jpg" alt="Image" className="img-fluid object-fit-fill" width={1800} height={800} />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">It is a Big World Out There, Go Explore</h1>
              <p className="mb-5" data-aos="fade-up">Welcome to CAWA Tours and Travels, your gateway to discovering the enchanting beauty of Kenya. Based in the heart of East Africa, we specialize in offering exceptional hotel booking services tailored for international tourists.</p>

            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1 */}

        <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="image-stack mb-5 mb-lg-0">
                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                  <Image src="/images/moran.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
                </div>
                <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                  <Image src="/images/img_v_2.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div>
                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore Kenya with CAWA Kenya Tours & Travels</h2>
                
                <p data-aos="fade-up" data-aos-delay="200">At CAWA Kenya Tours, we offer exceptional travel experiences throughout Kenya, including exciting Maasai Mara safaris and luxurious safari packages. Our tailored travel options range from wildlife tours to relaxing beach holidays, ensuring memorable adventures with expert guidance.</p>
                <p data-aos="fade-up" data-aos-delay="300">Explore the best of Kenya, from national parks and cultural tours to thrilling adventure experiences. Trust CAWA Kenya Tours to deliver an unforgettable journey blending culture, adventure, and relaxation.</p>

              </div>
            </div>
          </div>
        </div>
      </div>



    </main>
  );
}

export default Home;
