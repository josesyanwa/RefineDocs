// components/DocumentUpload.js
"use client"; 

import { useState } from 'react';
import Image from 'next/image';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Logic for file upload can go here
      console.log('File uploaded:', selectedFile.name);
      alert(`File uploaded: ${selectedFile.name}`);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="section section-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Image Section */}
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="image-stack mb-5 mb-lg-0">
              <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                <Image src="/images/refinedocs-4.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
              </div>
              <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                <Image src="/images/refinedocs-5.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
              </div>
            </div>
          </div>

          {/* Document Upload Section */}
          <div className="col-lg-4 order-lg-1">
            <div>
              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">
                Upload Your Document
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Please upload any necessary documents using the button below. Supported formats include PDFs, Word documents, and images.
              </p>

              <div className="file-input" data-aos="fade-up" data-aos-delay="300">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="form-control-file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>

              <button
                className="upload-button mt-44"
                onClick={handleUpload}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Upload Document
              </button>

              {selectedFile && (
                <p className="mt-3" data-aos="fade-up" data-aos-delay="500">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
