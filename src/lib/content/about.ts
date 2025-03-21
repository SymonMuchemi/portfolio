import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  paragraphs: [
    "I have developed and maintained scalable backend services and APIs, leveraging Express (TypeScript) and Flask (Python). I optimized database performance with MongoDB (Mongoose), PostgreSQL, and MySQL while implementing Sequelize ORM and SQLAlchemy for efficient data management. My experience extends to cloud computing, where I containerized applications using Docker, deployed services on AWS (EC2, S3, Secrets Manager), and automated CI/CD pipelines with GitHub Actions.",
    "Beyond backend development, I have worked on caching strategies (Redis), message queuing, and API security with JWT authentication and SSL/TLS encryption. I also integrate AI/ML capabilities (LLMs) into applications to enhance intelligence and predictive functionalities.",
    "My previous roles, including my internship at Teach2Give, allowed me to refine my API design, database optimization, and system architecture skills. Projects like ShopSmart, an e-commerce API built for scalability and efficiency, further demonstrate my ability to create production-ready solutions.",
    "I thrive in collaborative, fast-paced environments, continuously improving my problem-solving, system design, and DevOps skills. Open to new opportunities in back-end development, cloud computing, and distributed systems."
  ],
  list: {
    title: "Among other tools and languages, I have significant experience in:",
    items: [
      'Python',
      'Flask',
      'JavaScript',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Java',
      'Bash',
      'SQL',
      'C',
    ],
  },
  img: '/img.jpg',
};
