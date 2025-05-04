import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardContent } from './ui/Card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us launch our product ahead of schedule."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "InnovateLabs",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The quality of work delivered was exceptional. They brought innovative solutions to our complex technical challenges."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "DigitalFlow",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Their expertise in modern web technologies and ability to deliver user-friendly solutions made our project a huge success."
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-dark-900 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_80%)]"></div>
      
      <SectionTitle
        title="Client Testimonials"
        subtitle="What people say about working with me"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Quote className="text-primary-500 mb-4" size={32} />
                
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;