import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Web Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building reliable web solutions.',
        'Developing scalable web solutions.',
        'Leveraging LLMs and Machine Learning technologies to make powerful websites.',
      ],
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'C', icon: 'vscode-icons:file-type-c' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Github', icon: 'logos:github-icon' },
        { name: 'Azure', icon: 'logos:azure' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'Docker', icon: 'vscode-icons:file-type-docker' },
        { name: 'Postgresql', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Vercel', icon: 'vscode-icons:file-type-vercel' },
      ],
    },
    {
      id: getId(),
      title: 'Web Development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Using AI solutions to make intelligent web apps.',
        'Developing sustainable websites',
        'Building in teams to create a better web experience.',
      ],
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Github', icon: 'logos:github-icon' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Vercel', icon: 'vscode-icons:file-type-vercel' },
      ],
    },
  ],
};
