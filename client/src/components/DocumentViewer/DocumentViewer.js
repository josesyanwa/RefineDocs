// components/DocumentViewer.js
"use client";
import { useState } from 'react';

const DocumentViewer = () => {
  const [originalDocument] = useState("This is the original document text...");
  const [improvedDocument] = useState("This is the improved version of the document...");

  return (
    <div className="section document-viewer-section">
      <div className="container">
        <div className="row">
          {/* Heading section */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>Document <span className="d-block">Viewer</span></h2>
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
                  <p>{originalDocument}</p>
                </div>
              </div>

              {/* Improved Document */}
              <div className="col-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="document-section">
                  <h3>Improved Document</h3>
                  <p>{improvedDocument}</p>
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
