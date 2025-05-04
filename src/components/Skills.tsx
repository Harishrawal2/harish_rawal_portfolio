import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardContent } from './ui/Card';
import { Code, Server, Globe, Database, Cpu, Layout, Terminal, Settings } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const skillsData: Skill[] = [
  {
    name: 'Frontend',
    icon: <Code size={24} className="text-primary-500" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    icon: <Server size={24} className="text-secondary-500" />,
    items: ['Node.js', 'Express', 'Next.jS', 'Python', 'Django'],
  },
  {
    name: 'Databases',
    icon: <Database size={24} className="text-primary-500" />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
  },
  {
    name: 'DevOps',
    icon: <Settings size={24} className="text-secondary-500" />,
    items: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'],
  },
  {
    name: 'Web Technologies',
    icon: <Globe size={24} className="text-primary-500" />,
    items: ['REST API', 'GraphQL', 'WebSockets', 'OAuth', 'JWT', 'SEO'],
  },
  {
    name: 'UI/UX',
    icon: <Layout size={24} className="text-secondary-500" />,
    items: ['Figma', 'Responsive Design', 'Motion Design', 'Accessibility'],
  },
  {
    name: 'Tools',
    icon: <Terminal size={24} className="text-primary-500" />,
    items: ['Git', "Github", 'VS Code', 'Postman', 'Chrome DevTools', 'npm'],
  },
  {
    name: 'Concepts',
    icon: <Cpu size={24} className="text-secondary-500" />,
    items: ['OOP', 'Functional Programming', 'Clean Code', 'Design Patterns', 'TDD', 'Agile'],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-dark-950 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_65%)]"></div>

      <SectionTitle
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical skillset and areas of expertise."
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3 bg-white/5 p-2 rounded">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;