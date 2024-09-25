import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Therabot-AI',
      description:
        'A psychotherapy chatbot that uses AI to provide mental health support.',
      tasks:
        'A chatbot that uses GPT to provide mental health support. It acts as a psychotherapist and interacts with the user by asking relevant questions to better understand the user.',
      url: 'https://github.com/Thera-Bot/TheraBot-AI',
      img: 'https://i.postimg.cc/YS4ZhYML/screenshot.png',
      projectSkills: [
        { name: 'OpenAI', icon: 'vscode-icons:file-type-python' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-python' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Tailwind', icon: 'vscode-icons:file-type-python' },
      ],
    },
    {
      id: getId(),
      name: 'BookNest',
      description: 'A library management system that allows librarians to keep proper records of members and books in a library.',
      tasks:
        'Keep book inventory, handle user registration, update and deletion. Handle Book inventory, issuance and retrieval. keep records of member charges.',
      url: 'https://booknest78.vercel.app/',
      img: 'https://i.postimg.cc/6pB0MRWv/books.png',
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Flask', icon: 'logos:' },
        { name: 'React', icon: 'logos:' },
        { name: 'CSS', icon: 'logos:' },
      ],
    },
  ],
};

export default featuredProjectsSection;
