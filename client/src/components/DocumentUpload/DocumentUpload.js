"use client";

import { useState } from 'react';
import Image from 'next/image';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success notification

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log('Uploading file:', selectedFile);

      // Sending a POST request to your Flask backend with the JWT in the header
      fetch('http://127.0.0.1:5555/documents/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('JWT')}`,  
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error uploading document');
          }
          return response.json();
        })
        .then((data) => {
          setErrorMessage(''); // Clear error message on successful upload
          setSuccessMessage('Document uploaded and processed successfully'); // Show success notification
          console.log('Document uploaded successfully:', data);

          // Clear the success message after 3 seconds
          setTimeout(() => setSuccessMessage(''), 3000);

        })
        .catch((error) => {
          console.error('Error uploading document:', error.message);
          setErrorMessage('Error uploading document');
        });
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
                Please upload any necessary documents using the button below. Supported formats include PDFs and Word documents.
              </p>

              {/* Success message */}
              {successMessage && (
                <p className="mt-3 text-success" data-aos="fade-up" data-aos-delay="500">
                  {successMessage}
                </p>
              )}

              <div className="file-input" data-aos="fade-up" data-aos-delay="300">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="form-control-file"
                  accept=".pdf,.doc,.docx,.txt"
                />
              </div>

              <button
                className="upload-button mt-44"
                onClick={handleUpload}
                data-aos="fade-up" data-aos-delay="400"
              >
                Upload Document
              </button>

              {/* Error message */}
              {errorMessage && (
                <p className="mt-3 text-danger" data-aos="fade-up" data-aos-delay="500">
                  {errorMessage}
                </p>
              )}


              {/* Selected file name */}
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
