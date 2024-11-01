import React from "react";

const ResumeDownload = () => {
  const handleDownload = () => {
    // Link to your resume file
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1qa3GKhOKT6fvJ1HAHldpwhgQm6hjRcPB/view?usp=sharing"; // replace with actual resume file path
    link.download = "nitin_kabi_resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Download My Resume
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Interested in learning more about my background and experience? Download my resume and take a look at my skills and projects.
      </p>
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition-all duration-300"
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeDownload;
