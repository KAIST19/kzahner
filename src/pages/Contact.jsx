import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-[rgb(15,15,15)] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-[rgb(39,183,202)]">Touch</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg">
                    <FiMail className="text-[rgb(39,183,202)] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contact@janesmith.com</p>
                    <p className="text-gray-400">jane.smith@stanford.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg">
                    <FiPhone className="text-[rgb(39,183,202)] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (650) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg">
                    <FiMapPin className="text-[rgb(39,183,202)] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">
                      Stanford University<br />
                      Gates Computer Science Building<br />
                      353 Jane Stanford Way<br />
                      Stanford, CA 94305
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg text-[rgb(39,183,202)] hover:bg-[rgba(39,183,202,0.2)] transition-colors"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg text-[rgb(39,183,202)] hover:bg-[rgba(39,183,202,0.2)] transition-colors"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[rgba(39,183,202,0.1)] p-3 rounded-lg text-[rgb(39,183,202)] hover:bg-[rgba(39,183,202,0.2)] transition-colors"
                  >
                    <FiTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[rgb(39,183,202)] focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[rgb(39,183,202)] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[rgb(39,183,202)] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[rgb(39,183,202)] focus:border-transparent transition-colors"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-700 cursor-not-allowed' 
                        : 'bg-[rgb(39,183,202)] hover:bg-[rgb(29,153,172)]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-green-500"
                    >
                      Your message has been sent successfully!
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gray-800/30 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.2834960869706!2d-122.17303492359358!3d37.43029013669792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2a0a7c4d11%3A0x29cdf01a44fc102f!2sStanford%20University!5e0!3m2!1sen!2sus!4v1652364737213!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stanford University Map"
            ></iframe>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="text-[rgb(39,183,202)]">Questions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about collaboration, research opportunities, and more.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">How can I collaborate on research?</h3>
              <p className="text-gray-400">
                I'm always open to research collaborations that align with my areas of expertise. Please send me an email with a brief proposal outlining the research question and potential methods.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Do you accept PhD students?</h3>
              <p className="text-gray-400">
                Yes, I typically accept 1-2 new PhD students each year. Prospective students should apply through Stanford's official application process and mention my name in their statement.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Are there opportunities for undergraduates?</h3>
              <p className="text-gray-400">
                Yes, I regularly work with undergraduate students through research assistantships and independent study projects. Please contact me with your CV and a brief statement of interest.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Can you give a talk at my event?</h3>
              <p className="text-gray-400">
                I'm available for selected speaking engagements related to my research areas. Please send me details about your event, including the date, audience, and specific topics you'd like me to address.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 