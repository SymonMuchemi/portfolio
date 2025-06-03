import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Navari Limited',
      companyUrl: 'https://navari.co.ke/',
      role: 'Software Engineer',
      started: 'May 2025',
      upto: 'Present',
      tasks: [
        "Collaborate with a team to maintain and enhance ERP systems, ensuring high availability and reliability.",
        "Identify and resolve bugs, optimize system performance, and implement new features to improve user experience.",
      ],
    },
    {
      company: 'Teach2Give',
      companyUrl: 'https://teach2give.com/',
      role: 'QA/QE Intern',
      started: 'September 2024',
      upto: 'December 2024',
      tasks: [
        "Contributed to the development and quality assurance of full-stack web applications using TypeScript.",
        "Developed and maintained automated tests with Jest, ensuring robust and reliable application functionality.",
        "Worked closely with cross-functional teams to troubleshoot issues, optimize performance, and deliver high-quality software.",
      ],
    },
    {
      company: 'Dedan Kimathi University of Technology',
      companyUrl: 'https://www.dkut.ac.ke/',
      role: 'Computer Science Attachment',
      started: 'February 2023',
      upto: 'March 2023',
      tasks: [
        "Acquired foundational networking skills, including network simulation using Cisco Packet Tracer.",
        "Performed hands-on computer hardware troubleshooting and maintenance.",
        "Documented and participated in the software development life cycle through practical software project work.",
      ],
    }
  ],
};
