import React from 'react';
import { Mail, Linkedin, GithubIcon, Twitter, Send, ExternalLink, Globe, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'kabinitin2002@gmail.com',
      href: 'mailto:kabinitin2002@gmail.com',
      gradient: 'from-rose-500/20 via-rose-600/10 to-rose-700/20'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'nitin-kabi',
      href: 'https://linkedin.com/in/nitin-kabi-980532247',
      gradient: 'from-blue-500/20 via-blue-600/10 to-blue-700/20'
    },
    {
      icon: <GithubIcon className="w-6 h-6" />,
      label: 'Github',
      value: 'nitinkabi',
      href: 'https://github.com/nitinkabi',
      gradient: 'from-purple-500/20 via-purple-600/10 to-purple-700/20'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Portfolio',
      value: 'nitin.dev',
      href: 'https://nitin.dev',
      gradient: 'from-emerald-500/20 via-emerald-600/10 to-emerald-700/20'
    }
  ];

  return (
    <section id='contact' className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-6 rounded-2xl backdrop-blur-lg 
                border border-gray-700/50 bg-gradient-to-br ${link.gradient}
                transform transition-all duration-500 hover:scale-[1.02] 
                hover:shadow-xl hover:shadow-blue-500/10`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gray-800/50 text-gray-300 group-hover:text-white
                    group-hover:scale-110 transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-300 mb-1">
                      {link.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-gray-300 
                    group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Contact Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
            bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
            border border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/10 
            transition-all duration-300 group">
            <Send className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
            <a href="mailto:kabinitin2002@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              Send me a message
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 
              rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 bg-gray-800 
              rounded-full hover:bg-gray-700 transition-colors">
              <Twitter className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;