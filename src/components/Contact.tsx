import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Section id="contact" className="bg-dark-900 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_80%)]"></div>

      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you!"
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                    <p className="text-white">harish8126376269@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary-500/10 p-3 rounded-lg mr-4">
                    <Phone size={20} className="text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                    <p className="text-white">+91 7817837369</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                    <p className="text-white">Motera, Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/harish_rawal8126/"
                    target='_blank'
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.206 0 3.594.012 4.861.07 1.27.059 2.415.35 3.314 1.249.899.899 1.19 2.044 1.249 3.314.058 1.267.07 1.654.07 4.86s-.012 3.593-.07 4.86c-.059 1.27-.35 2.415-1.249 3.314-.899.899-2.044 1.19-3.314 1.249-1.267.058-1.654.07-4.86.07s-3.593-.012-4.86-.07c-1.27-.059-2.415-.35-3.314-1.249-.899-.899-1.19-2.044-1.249-3.314-.058-1.267-.07-1.654-.07-4.86s.012-3.593.07-4.86c.059-1.27.35-2.415 1.249-3.314.899-.899 2.044-1.19 3.314-1.249 1.267-.058 1.654-.07 4.86-.07zm0-2.163c-3.232 0-3.63.012-4.898.071-1.264.059-2.365.362-3.281 1.278-.916.916-1.219 2.017-1.278 3.281-.058 1.268-.071 1.666-.071 4.898s.012 3.63.071 4.898c.059 1.264.362 2.365 1.278 3.281.916.916 2.017 1.219 3.281 1.278 1.268.058 1.666.071 4.898.071s3.63-.012 4.898-.071c1.264-.059 2.365-.362 3.281-1.278.916-.916 1.219-2.017 1.278-3.281.058-1.268.071-1.666.071-4.898s-.012-3.63-.071-4.898c-.059-1.264-.362-2.365-1.278-3.281-.916-.916-2.017-1.219-3.281-1.278-1.268-.058-1.666-.071-4.898-.071zM12 5.843a6.157 6.157 0 1 0 0 12.314 6.157 6.157 0 0 0 0-12.314zm0 10.622a4.465 4.465 0 1 1 0-8.93 4.465 4.465 0 0 1 0 8.93zm6.406-10.622c-.559 0-1.011.452-1.011 1.011s.452 1.011 1.011 1.011 1.011-.452 1.011-1.011-.452-1.011-1.011-1.011z" />
                    </svg>

                  </a>
                  <a
                    href="https://github.com/Harishrawal2"
                    target='_blank'
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" className="text-gray-400">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harish-rawal-b4024b211/"
                    target='_blank'
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" className="text-gray-400">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-gray-400">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 text-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 text-white"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto gradient-border"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;