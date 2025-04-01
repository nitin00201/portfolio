import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, ExternalLink, Globe, Phone, MessageSquare, ChevronRight, Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copied, setCopied] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Reset copy status after 2 seconds
  useEffect(() => {
    if (copied !== null) {
      const timer = setTimeout(() => {
        setCopied(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'kabinitin2002@gmail.com',
      href: 'mailto:kabinitin2002@gmail.com',
      gradient: 'from-rose-500 to-red-600',
      bgGradient: 'from-rose-500/10 via-rose-600/5 to-rose-700/10',
      shadow: 'shadow-rose-500/20',
      copyValue: 'kabinitin2002@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'nitin-kabi',
      href: 'https://linkedin.com/in/nitin-kabi-980532247',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 via-blue-600/5 to-blue-700/10',
      shadow: 'shadow-blue-500/20',
      copyValue: 'https://linkedin.com/in/nitin-kabi-980532247'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'Github',
      value: 'nitin00201',
      href: 'https://github.com/nitin00201',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 via-purple-600/5 to-purple-700/10',
      shadow: 'shadow-purple-500/20',
      copyValue: 'https://github.com/nitin00201'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Portfolio',
      value: 'nitin.kabi',
      href: 'https://portfolio-sage-one-22.vercel.app/',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 via-emerald-600/5 to-emerald-700/10',
      shadow: 'shadow-emerald-500/20',
      copyValue: 'https://portfolio-sage-one-22.vercel.app/'
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: '/',
      gradient: 'from-sky-400 to-sky-600',
      label: 'Twitter'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/nitin00201',
      gradient: 'from-purple-500 to-purple-700',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/nitin-kabi-980532247',
      gradient: 'from-blue-500 to-blue-700',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:kabinitin2002@gmail.com',
      gradient: 'from-rose-500 to-rose-700',
      label: 'Email'
    }
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-shine"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact links and quick message */}
          <div className="space-y-8">
            {/* Contact Links Grid with hover animations */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient} opacity-0 blur-xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-20' : ''}`}></div>
                  <div className={`p-6 rounded-2xl backdrop-blur-lg 
                    border border-gray-700/50 bg-gradient-to-br ${link.bgGradient}
                    transform transition-all duration-500 hover:scale-[1.02] 
                    hover:shadow-xl ${link.shadow} relative`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white
                        group-hover:scale-110 transition-all duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {link.label}
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition-colors truncate">
                          {link.value}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleCopy(link.copyValue, index)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                          aria-label={`Copy ${link.label}`}
                          title={`Copy ${link.label}`}
                        >
                          {copied === index ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                          aria-label={`Visit ${link.label}`}
                          title={`Visit ${link.label}`}
                        >
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links with hover glow effect */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-3"></span>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.gradient} opacity-0 blur group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-12 h-12 bg-gray-800/80 rounded-full backdrop-blur-sm hover:bg-gray-700 transition-colors z-10"
                      aria-label={link.label}
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Message Button */}
            <div className="mt-8">
              <a
                href="mailto:kabinitin2002@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                  bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 
                  transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Quick Message</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right column - Contact form with animations */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl -z-10 opacity-30"></div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Hello, I'd like to talk about..."
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`
                    w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                    ${formStatus === 'success' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                      : formStatus === 'sending' 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    }
                  `}
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-16 text-gray-400">
          <p>Looking forward to connecting with you!</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;