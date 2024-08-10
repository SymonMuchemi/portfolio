import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: [
    'Simon Muchemi!',
    'Web Developer',
    'Backend Developer',
    'Computer Scientist',
  ],
  tagline: 'Specializing in Backend Web Development.',
  description:
    'I’m a Computer Science student at Dedan Kimathi University of Technology, specializing in Backend Web Development Technologies. I am passionate about acquiring new skills and building projects to gain hands-on experience. I thrive on collaboration and am dedicated to turning innovative ideas into reality.',
  specialText: 'Currently open to job opportunities and dev projects.',
  cta: {
    title: 'View My Resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
