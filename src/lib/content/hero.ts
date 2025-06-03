import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: [
    'Simon Muchemi!',
    'A Software Engineer',
    'A Back-end Developer',
  ],
  tagline: 'Specializing in Back-end Web Development.',
  description:
    'I’m a software engineer with a Computer Science degree from Dedan Kimathi University of Technology and a certified ALX Software Engineer, specializing in scalable, high-performance back-end systems. With expertise in TypeScript, Python, Node.js, Flask, PostgreSQL, MongoDB, and cloud technologies, I design and build robust applications that drive efficiency and reliability.',
  specialText: 'Ready to work.',
  cta: {
    title: 'View My Resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
