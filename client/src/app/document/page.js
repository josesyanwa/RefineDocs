import Image from 'next/image';
import Link from 'next/link';
import DocumentUpload from '@/components/DocumentUpload/DocumentUpload';
import DocumentViewer from '@/components/DocumentViewer/DocumentViewer';
import SuggestionInterface from '@/components/SuggestionInterface/SuggestionInterface';

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
              <h1 className="headings" data-aos="fade-up">Upload & View Documents And Accept & Deny Suggestions</h1>
              <p className="mb-5" data-aos="fade-up">Refine. Improve. Perfect Your Documents Using RefineDocs</p>
              
                                                          
            </div>
          </div>
        </div>
      </div>

      <DocumentUpload/>
      <DocumentViewer/>
      <SuggestionInterface/>


    </>
  );
}

export default Document