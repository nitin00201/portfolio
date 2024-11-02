import React from "react";

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1qa3GKhOKT6fvJ1HAHldpwhgQm6hjRcPB/view?usp=sharing"; 
    link.download = "nitin_kabi_resume.pdf";
    link.click();
    
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ">
      <div className="flex flex-col items-center justify-center bg-gray-800 py-10 px-8 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">
          Download My Resume
        </h2>
        <p className="text-gray-300 mb-6 text-center max-w-md">
          Interested in learning more about my background and experience? Download my resume and explore my skills and projects.
        </p>
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeDownload;
