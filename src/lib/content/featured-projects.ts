import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Devcamper API',
      description:
        'A secure high performance platform for bootcamps, courses, reviews and users. ',
      tasks:
        ' RESTful API that provides a platform for bootcamps, courses, reviews and users. It allows users to create, read, update and delete bootcamps, courses, reviews and users. The API also provides user authentication and authorization, password encryption, image upload, geocoding, pagination, filtering, sorting, querying, custom error handling middleware, rate limiting, cross-origin resource sharing (CORS), security headers, helmet, XSS protection, HPP protection, sanitization and logging. The API is documented using Postman.',
      url: 'https://github.com/SymonMuchemi/DevCamper-API',
      img: 'https://i.postimg.cc/7YMBGhvN/Devcamper-Architectural-Diagram-with-region.png',
      projectSkills: [
        { name: 'Express', icon: 'logos:express' },
        { name: 'Node.js', icon: 'logos:nodejs' },
        { name: 'Docker', icon: 'logos:docker' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
      ],
    },
    {
      id: getId(),
      name: 'FilesearchTCP',
      description: 'A file search application that uses TCP sockets for communications and benchmarks various file search algorithms to search for strings provided by the client(s).',
      tasks:
        'a high-performance, multi-threaded TCP server designed for fast and efficient string search operations within large text files. The server supports concurrent connections, real-time file updates, and secure communication via SSL. It is optimized for speed and built to function as a Linux service.',
      url: 'https://github.com/SymonMuchemi/FileSearchTCP',
      img: 'https://i.postimg.cc/Hs9VqD5x/DALL-E-2025-03-21-09-44-33-A-futuristic-server-room-with-glowing-fiber-optic-cables-A-terminal-sc.webp',
      projectSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Sockets Programming', icon: 'logos:sockets' },
        { name: 'TCP/IP', icon: 'logos:tcp-ip' },
        { name: 'Networking', icon: 'logos:networking' },
      ],
    },
    {
      id: getId(),
      name: 'Shopsmart API',
      description: 'A robust RESTful API for e-commerce operations built with Node.js and MongoDB',
      tasks:
        'Features comprehensive endpoints for product management, secure user authentication, shopping cart operations, and payment integration (MPesa). Designed to support scalable e-commerce applications with detailed documentation for front-end integration.',
      url: 'https://booknest78.vercel.app/',
      img: 'https://i.postimg.cc/MKNyG8HY/Screenshot-from-2025-03-21-09-39-10.png',
      projectSkills: [
        { name: 'Express', icon: 'logos:express' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'AWS S3', icon: 'logos:aws-s3' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
      ],
    },
  ],
};

export default featuredProjectsSection;
