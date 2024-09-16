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
              <h1 className="headings" data-aos="fade-up">Transform Your Writing with AI Precision</h1>
              <p className="mb-5" data-aos="fade-up">RefineDocs is an AI-powered document assistant that helps you improve your writing by providing smart suggestions for clarity, grammar, and style.</p>

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
                  <Image src="/images/refinedocs-5.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
                </div>
                <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                  <Image src="/images/refinedocs-4.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div>
                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Elevate Your Words with RefineDocs</h2>
                
                <p data-aos="fade-up" data-aos-delay="200">RefineDocs is your AI-powered assistant designed to enhance and refine your documents with ease. Whether you need to improve grammar, clarity, or style, RefineDocs uses advanced natural language processing (NLP) to analyze your content and offer intelligent suggestions.</p>
                <p data-aos="fade-up" data-aos-delay="300">With an intuitive interface and real-time editing tools, you can elevate your writing to a professional standard, all while staying in control. Upload, edit, and export your documents effortlessly, using a seamless workflow tailored to your needs.</p>

              </div>
            </div>
          </div>
        </div>
      </div>



    </main>
  );
}

export default Home;
