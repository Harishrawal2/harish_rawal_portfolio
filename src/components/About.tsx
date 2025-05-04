import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Code, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-dark-950 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_80%)]"></div>

      <SectionTitle
        title="About Me"
        subtitle="I'm a passionate software engineer with a focus on creating elegant solutions to complex problems."
        mxAuto='none'
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>

              <div className="space-y-6">
                <p className="text-gray-300">
                  With over 2 years of experience in software development, I've worked on a variety of projects ranging from web applications to mobile apps and enterprise solutions.
                </p>

                <p className="text-gray-300">
                  My expertise lies in building scalable, efficient, and user-friendly applications using modern technologies and best practices. I'm passionate about clean code, performance optimization, and creating exceptional user experiences.
                </p>

                <p className="text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Framer Motion</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-500/20 p-3 rounded-lg">
                    <Code size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Development</h3>
                    <p className="text-gray-400 text-sm">Full-stack development with modern technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-500/20 p-3 rounded-lg">
                    <BookOpen size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-400 text-sm">Always staying up-to-date with the latest technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary-500/20 p-3 rounded-lg">
                    <GraduationCap size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <p className="text-gray-400 text-sm">B.Tech in Computer Science & Engineering</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-500/20 p-3 rounded-lg">
                    <Briefcase size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                    <p className="text-gray-400 text-sm">2+ years of professional experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;