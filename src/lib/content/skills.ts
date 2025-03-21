import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Back-End Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building reliable full stack web solutions.',
        'Developing scalable web solutions.',
        'Leveraging LLMs and Machine Learning technologies to make powerful websites.',
      ],
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'C', icon: 'vscode-icons:file-type-c' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Github', icon: 'logos:github-icon' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'Postgresql', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Flask', icon: 'logos:flask' },
        { name: 'Express', icon: 'logos:express' },
      ],
    },
    {
      id: getId(),
      title: 'System Design',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Designing scalable and maintainable system architectures.',
        'Creating detailed system design documents.',
        'Ensuring system reliability and performance.',
        'Implementing best practices for system design.',
      ],
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Github', icon: 'logos:github-icon' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'Quality Assurance',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Testing application backend.',
        'Ensuring software quality through automated testing.',
        'Performing manual testing to identify bugs.',
        'Collaborating with developers to resolve issues.',
      ],
      projectSkills: [
        { name: 'Jest', icon: 'logos:jest' },
        { name: 'Cypress', icon: 'logos:cypress' },
        { name: 'Mocha', icon: 'logos:mocha' },
      ],
    },
  ],
};
