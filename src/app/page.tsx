'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import MeteorEffect from '@/components/MeteorEffect';

export default function Home() {
  useEffect(() => {
    // Define the click handler with correct 'this' typing
    const handleClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href')?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 text-white">
      <CustomCursor />
      <MeteorEffect number={20} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
