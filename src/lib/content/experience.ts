import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Teach2Give',
      companyUrl: 'https://teach2give.com/',
      role: 'QA/QE Intern',
      started: 'September 2024',
      upto: 'December 2024',
      tasks: [
        "Contributed to the development and quality assurance of full-stack web applications using TypeScript",
        "Wrote clean, maintainable code, implemented automated tests with Jest, and ensured application functionality aligned with user requirements.",
        "Collaborated with cross-functional teams to identify and resolve bugs, optimize performance, and enhance user experience."
      ],
    },
    {
      company: 'Dedan Kimathi University of Technology',
      companyUrl: 'https://www.dkut.ac.ke/',
      role: 'Computer Science Attachment',
      started: 'February 2023',
      upto: 'March 2023',
      tasks: [
        'Gained foundational knowledge in networking, including simulation of network setups using Cisco PacketTracer.',
        'Conducted practical exercises on computer hardware, building troubleshooting skills and hardware knowledge.',
        'Studied the software development life-cycle, with hands-on experience in documenting and developing software projects.',
      ],
    }
  ],
};
