"use client";
import { useState, useEffect } from 'react';
import SuggestionInterface from "@/components/SuggestionInterface/SuggestionInterface"; // Import your SuggestionInterface

const DocumentViewer = () => {
  const [originalDocument, setOriginalDocument] = useState("");
  const [improvedDocument, setImprovedDocument] = useState("");
  const [documentId, setDocumentId] = useState(null); // State to hold document ID
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
        
        setOriginalDocument(data.latest_document.original_content);
        setImprovedDocument(data.latest_document.improved_content);
        setDocumentId(data.latest_document.id); // Set the document ID
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchDocument();
  }, []);

  // Function to handle export to Word
  const exportToWord = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/export-document/${documentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('JWT')}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to export document');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'improved_document.docx'); // Name of the file
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error('Error exporting document:', err);
    }
  };

  return (
    <div className="section document-viewer-section">
      <div className="container">
        <div className="row">
          {/* Heading section */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>View <span className="d-block">Documents</span></h2>
              <p>View the original document with its improved version side by side.</p>
            </div>
          </div>

          {/* Document display section */}
          <div className="col-lg-9">
            <div className="row">
              {/* Original Document */}
              <div className="col-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="document-section">
                  <h3>Original Document</h3>
                  {error ? <p>{error}</p> : <p>{originalDocument || "Loading original document..."}</p>}
                </div>
              </div>

              {/* Improved Document */}
              <div className="col-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="document-section">
                  <h3>Improved Document</h3>
                  {error ? <p>{error}</p> : <p>{improvedDocument || "Loading improved document..."}</p>}
                </div>

                {/* Export Button */}
              <div className="row mt-4">
                <div className="col-12">
                  <button className="upload-button mt-44" onClick={exportToWord}>
                    Download
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* Render SuggestionInterface and pass documentId */}
        {documentId && <SuggestionInterface documentId={documentId} />}
        
      </div>
    </div>
  );
};

export default DocumentViewer;
