import Image from 'next/image';
import Link from 'next/link';
import DocumentUpload from '@/components/DocumentUpload/DocumentUpload';

const Document = () => {
  return (
    <>
      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/refinedocs-2.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">Document Us</h1>
              <p className="mb-5" data-aos="fade-up">Discover the world with CAWA Tours and Travels! At CAWA, we specialize in creating unforgettable travel experiences tailored just for you.</p>
              
                                                          
            </div>
          </div>
        </div>
      </div>

      <DocumentUpload/>


    </>
  );
}

export default Document