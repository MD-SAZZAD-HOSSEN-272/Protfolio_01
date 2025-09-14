import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import NoFoundProject from "./NoFoundProject";
import Loader from "./Loader";

const LIMIT = 3; // Number of projects per page

const ProjectCard = () => {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", page],
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

  const handleModal = (id) => {
    const modalData = projects.find((project) => project._id === id);
    setModalData(modalData);
    setOpen(true);
  };
  if (isLoading) return <Loader></Loader>;
  if (projects.length <= 0) return <NoFoundProject />;

  return (
    <Element name="project">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-5">
          {projects?.map((project, index) => (
            <div  key={index} className="bg-gray-900/80 backdrop overflow-hidden rounded-2xl">
              <div data-aos='fade-left' className="flex flex-col lg:flex-row relative overflow-hidden group items-center  gap-6 w-full rounded-2xl shadow-2xl border border-purple-400 p-4">
                <div className="lg:w-1/2 w-full">
                  <img
                    className="w-full h-96 object-cover transform group-hover:scale-105 rounded-2xl transition duration-500 ease-in-out"
                    src={project?.task_image_url}
                    alt="Project Image"
                  />
                </div>
                <div className="flex flex-col space-y-2 lg:w-1/2 text-white">
                  <h2 className="md:text-2xl text-xl font-semibold pt-5 text-purple-400">
                    {project?.title}
                  </h2>
                  <p className="text-gray-400">{project?.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-400">
                    {project?.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2">
                    {project?.techStack?.map((tag, i) => (
                      <motion.div
                      animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 10,
                          delay: i * .2,
                          repeat: Infinity,
                        }}
                        key={i}
                        className="badge badge-outline text-sm w-28 px-3 py-2 hover:bg-pink-500 hover:border-0 rounded-md border-gray-300"
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 w-fit gap-3 pt-4 px-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit"
                    >
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-green-600 hover:bg-green-700 text-white">
                        <FaExternalLinkAlt className="text-purple-400" /> Live
                      </button>
                    </a>
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit"
                    >
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white">
                        <FaGithub className="text-purple-400" /> Client
                      </button>
                    </a>
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit"
                    >
                      <button className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white">
                        <FaGithub className="text-purple-400" /> Server
                      </button>
                    </a>
                    <button
                      onClick={() => handleModal(project._id)}
                      className="cursor-pointer flex px-4 py-2 rounded-xl items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <FaInfoCircle className="text-purple-400" /> Details
                    </button>
                  </div>
                </div>
              </div>
              {open && (
                <dialog className="modal modal-open">
                  <div className="modal-box flex flex-col lg:flex-row gap-10 bg-[#0f0f23] text-white max-w-4xl rounded-2xl shadow-2xl border border-[#8a2be2]">
                    <div className=" rounded-xl lg:w-1/2">
                      <img
                        src={modalData.task_image_url}
                        alt="Project"
                        className="w-full object-cover rounded-xl mb-5 border border-gray-700"
                      />
                    </div>

                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">
                        {modalData.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>Description:</strong> {modalData.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-1">
                            ✨ Features
                          </h4>
                          <ul className="list-disc ml-6">
                            {modalData.features?.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-1">
                            🧪 Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {modalData.techStack?.map((tech, i) => (
                              <span
                                key={i}
                                className="badge badge-outline border-purple-500 text-purple-300 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-sm text-gray-300">
                        <p>
                          <strong>Role:</strong> {modalData.role}
                        </p>
                        <p>
                          <strong>Responsibilities:</strong>{" "}
                          {modalData.responsibilities}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={modalData.live}
                          target="_blank"
                          className="btn btn-success btn-sm"
                        >
                          🌐 Live
                        </a>
                        <a
                          href={modalData.clientRepo}
                          target="_blank"
                          className="btn btn-primary btn-sm"
                        >
                          💻 Client
                        </a>
                        <a
                          href={modalData.serverRepo}
                          target="_blank"
                          className="btn btn-secondary btn-sm"
                        >
                          🗄 Server
                        </a>
                      </div>
                      <div className="modal-action">
                        <button
                          onClick={() => setOpen(false)}
                          className="btn btn-outline border-purple-500 hover:text-black text-purple-300"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </dialog>
              )}
            </div>
          ))}

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 cursor-pointer text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 cursor-pointer text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default ProjectCard;
