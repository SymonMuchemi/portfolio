import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'Therabot-AI ',
      url: 'https://github.com/Thera-Bot/TheraBot-AI',
      repo: 'https://github.com/Thera-Bot/TheraBot-AI',
      img: 'https://i.postimg.cc/YS4ZhYML/screenshot.png',
      year: 2024,
      projectSkills: [
        { name: 'OpenAI', icon: 'vscode-icons:file-type-python' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-JavaScript' },
        { name: 'Python', icon: 'vscode-icons:file-type-Python' },
        { name: 'Tailwind', icon: 'vscode-icons:file-type-Taiwind' },
      ],
    },
    {
      id: getId(),
      name: 'BookNest API',
      url: 'https://github.com/SymonMuchemi/BookNest-Server',
      repo: 'https://github.com/SymonMuchemi/BookNest-Server',
      img: 'https://i.postimg.cc/SNTg75sX/Screenshot-from-2025-03-21-08-11-07.png',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      name: 'BookNest Client',
      url: 'https://github.com/SymonMuchemi/BookNest-Client',
      repo: 'https://github.com/SymonMuchemi/BookNest-Client',
      img: 'https://i.postimg.cc/6pB0MRWv/books.png',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
      ],
    },
  ],
};
