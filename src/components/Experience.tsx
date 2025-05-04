import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  technologies: string[];
  website: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Software Engineer",
    period: "2023 - Present",
    current: true,
    description: "Leading the development of cloud-native applications and microservices architecture. Implementing CI/CD pipelines and mentoring junior developers.",
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    website: "https://example.com"
  },
  {
    id: 2,
    company: "Digital Innovations Inc",
    position: "Full Stack Developer",
    period: "2022 - 2023",
    current: false,
    description: "Developed and maintained multiple web applications. Improved application performance by 40% through optimization techniques.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    website: "https://example.com"
  },
  {
    id: 3,
    company: "StartUp Ventures",
    position: "Frontend Developer",
    period: "2021 - 2022",
    current: false,
    description: "Built responsive web interfaces and implemented new features. Collaborated with UX team to improve user experience.",
    technologies: ["React", "JavaScript", "SASS", "Redux"],
    website: "https://example.com"
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-dark-900 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_80%)]"></div>

      <SectionTitle
        title="Work Experience"
        subtitle="Over 2 years of professional experience in software development."
        centered
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className={`relative overflow-hidden ${exp.current ? 'border-primary-500/50' : ''}`}>
              {exp.current && (
                <div className="absolute top-0 right-0">
                  <Badge variant="primary" className="m-4">Current</Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="text-primary-500" size={20} />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-primary-400 mb-3">
                      {exp.position}
                    </h4>

                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant={idx % 2 === 0 ? 'default' : 'secondary'}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;