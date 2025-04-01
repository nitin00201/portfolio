import React, { useState } from 'react';

const ResumeDownload = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/file/d/12j0ou3HudTbRnxNXHVFccq84B3/view?usp=sharing"; 
      link.download = "nitin_kabi_resume.pdf";
      link.click();
      
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black overflow-hidden">
      <div 
        className={`relative transform transition-all duration-500 ease-in-out ${isHovering ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-1/2 -right-5 w-10 h-10 bg-green-300 rounded-full opacity-70 animate-pulse delay-300"></div>
        
        <div className="relative flex flex-col items-center justify-center backdrop-blur-sm bg-white/20 py-10 px-8 rounded-xl shadow-2xl max-w-md border border-white/30">
          <div className="absolute -top-4 -right-4 p-2 bg-white/30 rounded-full backdrop-blur-sm border border-white/20">
            <svg className="w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 text-center drop-shadow-md">
            Download My Resume
          </h2>
          
          <p className="text-white/90 mb-8 text-center max-w-md">
            Interested in learning more about my background and experience? Download my resume and explore my skills and projects.
          </p>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ${
              isDownloading 
                ? 'bg-purple-600 text-white cursor-wait' 
                : 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white hover:shadow-xl'
            }`}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            
            <span className="relative flex items-center justify-center">
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Download Resume
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;