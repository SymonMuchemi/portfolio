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
    // {
    //   id: getId(),
    //   name: 'Chat with Groq',
    //   description: 'A chat application using Groq for real-time messaging.',
    //   tasks:
    //     'A chat application using Groq for real-time messaging. The project uses AIDL for communication between the client and server. It also uses Material You for dynamic theming and color theory for a better user experience.',
    //   url: 'https://github.com/c2-tlhah/chat-with-groq',
    //   img: 'https://i.postimg.cc/Sskwq1hf/1-Q-u-FKGw-JY8z1-U1yu-Te-f-RQ.webp',
    //   projectSkills: [
    //     { name: 'Python', icon: 'vscode-icons:file-type-python' },
    //     { name: 'Streamlit', icon: 'logos:' },
    //     { name: 'GROQ', icon: 'logos:' },
    //     { name: 'Groq API', icon: 'logos:' },
    //   ],
    // },
  ],
};

export default featuredProjectsSection;
