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
        'Building ETL pipelines for data processing and transformation.',
        'Developing responsive and scalable web solutions.',
        'Creating big data solutions using AWS services.',
      ],
      projectSkills: [
        { name: 'C', icon: 'vscode-icons:file-type-c' },
        { name: 'C++', icon: 'vscode-icons:file-type-cpp' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
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
      title: 'Machine Learning & AI',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Developing machine learning models for predictive analysis.',
        'Creating AI solutions for computer vision and NLP.',
        'Building data visualization dashboards for insights.',
      ],
      projectSkills: [
        { name: 'Panadas', icon: 'logos:pandas' },
        { name: 'Numpy', icon: 'logos:numpy' },
        { name: 'Matplotlib', icon: 'logos:matplotlib' },
        { name: 'Seaborn', icon: 'logos:seaborn' },
        { name: 'Tensorflow', icon: 'logos:tensorflow' },
        { name: 'Pytorch', icon: 'logos:pytorch' },
        { name: 'Jupyter', icon: 'logos:jupyter' },
        { name: 'Tableau', icon: 'logos:tableau' },
        { name: 'Spark', icon: 'logos:spark' },
      ],
    },
  ],
};
