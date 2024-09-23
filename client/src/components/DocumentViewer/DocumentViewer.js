"use client";
import { useState, useEffect } from 'react';

const DocumentViewer = () => {
  const [originalDocument, setOriginalDocument] = useState("");
  const [improvedDocument, setImprovedDocument] = useState("");
  const [error, setError] = useState(null);

  // Fetch the latest document on component mount
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/documents/latest', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('JWT')}`, 
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch the latest document');
        }
  
        const data = await response.json();
        
        // Log the fetched data to the console
        console.log(data);
  
        setOriginalDocument(data.latest_document.original_content);
        setImprovedDocument(data.latest_document.improved_content);
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchDocument();
  }, []);
  

  return (
    <div className="section document-viewer-section">
      <div className="container">
        <div className="row">
          {/* Heading section */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>View <span className="d-block">Document</span></h2>
              <p>Compare the original document with its improved version side by side.</p>
            </div>
          </div>

          {/* Document display section */}
          <div className="col-lg-9">
            <div className="row">
              {/* Original Document */}
              <div className="col-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="document-section">
                  <h3>Original Document</h3>
                  {error ? <p>Error: {error}</p> : <p>{originalDocument || "Loading original document..."}</p>}
                </div>
              </div>

              {/* Improved Document */}
              <div className="col-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="document-section">
                  <h3>Improved Document</h3>
                  {error ? <p>Error: {error}</p> : <p>{improvedDocument || "Loading improved document..."}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
