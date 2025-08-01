import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';

const LIMIT = 3; // Number of projects per page

const ProjectCard = () => {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['tasks', page],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?page=${page}&limit=${LIMIT}`);
      console.log(res);
      return res.data;
    },
    keepPreviousData: true,
  });

  const totalPages = data?.totalPages || 1;
  const projects = data?.data || [];

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
console.log(projects);
  return (
    <Element name="project">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {isLoading ? (
          <p className="text-center text-gray-500">Loading projects...</p>
        ) : (
          <>
            {projects?.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-6 w-full rounded-2xl shadow-md"
              >
                <div className="lg:w-1/2">
                  <img
                    className="w-full rounded-2xl h-80"
                    src={project?.task_image_url
}
                    alt=""
                  />
                </div>

                <div className="flex flex-col space-y-5 lg:w-1/2">
                  <h2 className="md:text-2xl text-xl font-semibold">{project?.title}</h2>
                  <p className="text-gray-600">{project?.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {project?.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
                    {project?.techStack?.map((tag, i) => (
                      <span
                        key={i}
                        className="badge badge-outline text-sm px-3 py-2 hover:bg-pink-500 hover:border-0 rounded-md border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 w-fit gap-3 pt-4 px-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className='w-fit'>
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-green-500 hover:bg-green-600 text-white">
                        <FaExternalLinkAlt /> Live
                      </button>
                    </a>
                    <a href={project.clientRepo} target="_blank" rel="noreferrer" className='w-fit'>
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white">
                        <FaGithub /> Client
                      </button>
                    </a>
                    <a href={project.serverRepo} target="_blank" rel="noreferrer" className='w-fit'>
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white">
                        <FaGithub /> Server
                      </button>
                    </a>
                    <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white">
                      <FaInfoCircle /> Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="font-medium">Page {page} of {totalPages}</span>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </motion.div>
    </Element>
  );
};

export default ProjectCard;
