import React from 'react';

const Contact=()=> {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-gray-400">Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <a href="mailto:kabinitin2002@gmail.com" className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
