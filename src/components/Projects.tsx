import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Event Management System',
    description: 'The Event Management System is a full-stack web application designed to simplify the planning, organizing, and registration process for events. It allows event organizers to create and manage events while enabling users to browse upcoming events, register, and receive updates.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Tailwind CSS', "nextjs"],
    demoUrl: 'https://event-management-sage-iota.vercel.app/',
    repoUrl: 'https://github.com/Harishrawal2/Employee-Management-System.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Backend for a food delivery app using Node.js, Express.js, MongoDB; supports orders, users, restaurants, authentication, and real-time tracking.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Node.js', 'Express', 'MongoDB', 'nodemailer', 'JWT', 'bcrypt'],
    demoUrl: 'https://github.com/Harishrawal2/nodejs_course/tree/food_delivery_Back-end',
    repoUrl: 'https://github.com/Harishrawal2/nodejs_course/tree/food_delivery_Back-end',
  },
  {
    id: 3,
    title: 'Twitter Backend',
    description: 'A scalable backend for a Twitter-like application, handling user authentication, tweet creation, following, and real-time notifications.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Socket.io', 'Mongoose', 'bcrypt'],
    demoUrl: 'https://github.com/Harishrawal2/tweeterclone_mern',
    repoUrl: 'https://github.com/Harishrawal2/tweeterclone_mern',
  },
  {
    id: 4,
    title: 'Landing Page Website',
    description: 'An interactive website with 3D elements, animations, and a custom design system built with Three.js and React.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: 'https://github.com/Harishrawal2/Landing_page_website',
    repoUrl: 'https://github.com/Harishrawal2/Landing_page_website',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-dark-900 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_80%)]"></div>

      <SectionTitle
        title="Featured Projects"
        subtitle="Here are some of my recent projects that showcase my skills and interests."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card isHoverable className="h-full flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant={idx % 2 === 0 ? 'default' : 'secondary'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/5 pt-4 justify-between">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.repoUrl, '_blank')}
                >
                  <Github size={16} />
                  <span>Code</span>
                </Button>
                <Button
                  variant="primary"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;