// import React from 'react';
// import { Element } from 'react-scroll';

// const ProjectCard = ({project

// }) => {
//     return (
//          <Element name='project'>
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
//       <div className="relative h-48 w-full overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="p-5">
//         <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
//           {project.title}
//         </h3>
//         <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-4 text-sm">
//           <a
//             href={project.link}
//             target="_blank"
//             className="text-blue-500 hover:underline"
//           >
//             Live Demo
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             className="text-gray-500 hover:underline"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//          </Element>
//     );
// };

// export default ProjectCard;






import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';


const projects = [
  {
    title: 'Artifact Archive',
    description: 'Artifact Archive is a digital platform designed to preserve and showcase historical artifacts from various cultures and time periods. The project allows users to explore detailed information about each artifact, including its origin, era, material, cultural significance, and associated historical events. The platform supports image galleries, category filters (e.g., ancient tools, religious items, manuscripts), and search functionality to make historical exploration easy and engaging..',
    techStack: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js', 'SweetAlert2'],
    features: [
  'Dynamically add artifact history',
  'SweetAlert2 confirmation before adding an artifact',
  'View your favorite artifacts that you have liked',
  'User authentication and authorization (JWT)',
  'View artifacts you have added',
],
    role: 'Full-stack Developer',
    responsibilities: [
      'Designed responsive frontend using React, Tailwind CSS, and DaisyUI',
      'Built secure REST API with Express and MongoDB',
    ],
    image: 'https://i.ibb.co/rGfrNTmx/Artifact-archive.png',
    live: 'https://assignment-11-277b3.web.app/',
    clientRepo: 'https://github.com/sazzad-dev/parcel-delivery-client',
    serverRepo: 'https://github.com/sazzad-dev/parcel-delivery-server',
  },
  {
    title: 'DevBoard - Project & Task Manager',
    description: 'A productivity web app to manage team projects and tasks. It includes a kanban-style task board, authentication, and real-time task updates.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'React DnD'],
    features: [
      'Drag-and-drop task organization',
      'Role-based dashboard for admin, manager, and team members',
      'JWT-based secure login system',
      'Task filtering and search',
      'MongoDB data persistence with Mongoose',
    ],
    role: 'Full-stack Developer',
    responsibilities: [
      'Developed frontend with role-specific dashboards',
      'Created a secure backend API with role-based access control',
      'Used React DnD for intuitive drag-and-drop experience',
      'Handled database models and schema validation',
    ],
    image: 'https://your-image-url.com/devboard.png',
    live: 'https://devboard-tasker.web.app',
    clientRepo: 'https://github.com/sazzad-dev/devboard-client',
    serverRepo: 'https://github.com/sazzad-dev/devboard-server',
  },
  {
    title: 'Doctor Profile Admin Panel',
    description: 'A healthcare admin dashboard that allows users to add, update, and delete doctor profiles. Supports rich forms and secure admin-only features.',
    techStack: ['React', 'DaisyUI', 'MongoDB', 'Express.js', 'React Router', 'JWT'],
    features: [
      'CRUD operations on doctor profiles',
      'Responsive dashboard layout with DaisyUI',
      'Form validation and data submission using React Hook Form',
      'Secure route protection and login',
      'Pagination and search filtering for profile list',
    ],
    role: 'Frontend & Backend Developer',
    responsibilities: [
      'Built UI components with React and DaisyUI',
      'Implemented secure backend using Express and MongoDB',
      'Handled route protection and login with JWT',
      'Designed efficient REST API for profile management',
    ],
    image: 'https://your-image-url.com/doctor-profile.png',
    live: 'https://doctor-profile-admin.web.app',
    clientRepo: 'https://github.com/sazzad-dev/doctor-admin-client',
    serverRepo: 'https://github.com/sazzad-dev/doctor-admin-server',
  }
];


const ProjectCard = () => {
  return (
    <Element name='project'>
      <motion.div
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {
        projects.map((project, index) => <div key={index} className="flex flex-col lg:flex-row items-center gap-6 w-full p-4 border rounded-2xl shadow-md">
        {/* Image */}
        <div className="lg:w-1/2">
          <img className='w-full rounded-2xl h-80' src={project?.image} alt="" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="text-gray-600">
            {project.description}
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700">
            {
              project.features.map((feature, index ) => <li key={index}>{feature}</li>)
            }
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag, i) => (
              <span
                key={i}
                className="badge badge-outline text-sm px-3 !py-4 hover:bg-pink-500 hover:!border-0 !rounded-md border-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex px-4 py-2 cursor-pointer rounded-xl items-center gap-1 bg-green-500 hover:bg-green-600 text-white">
              <FaExternalLinkAlt /> Live
            </button>
            <button className="flex px-4 py-2 cursor-pointer rounded-xl items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white">
              <FaGithub /> GitHub
            </button>
            <button className="flex px-4 py-2 cursor-pointer rounded-xl items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white">
              <FaInfoCircle /> Details
            </button>
          </div>
        </div>
      </div>)
      }
    </motion.div>
    </Element>
  );
};

export default ProjectCard;
