import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useUpdateImgBB from "../hooks/useUpdateImgBB";
import { useMutation } from "@tanstack/react-query";

const techOptions = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "firebase",
];

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [selectedTechs, setSelectedTechs] = useState([]);

  const handleAddTech = (tech) => {
    if (!selectedTechs.includes(tech)) {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleRemoveTech = (tech) => {
    setSelectedTechs(selectedTechs.filter((t) => t !== tech));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/add_task", data);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Project has been added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      }
      console.log(data);
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  const onSubmit = async (data) => {
    data.techStack = selectedTechs;
    const imageURl = await useUpdateImgBB(data.task_image_url?.[0]);
    data.task_image_url = imageURl;
    mutate(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6  shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Add a New Project
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="col-span-2">
          <label className="font-semibold">Project Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="GreenThumb"
          />
        </div>
        <div className="col-span-2">
          <label className="font-semibold">Project Picture</label>
          <input
            type="file"
            {...register("task_image_url")}
            className="w-full p-2 border rounded"
            placeholder="GreenThumb"
          />
        </div>

        <div className="col-span-2">
          <label className="font-semibold">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>

        <div className="col-span-2">
          <label className="font-semibold">Tech Stack</label>
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {selectedTechs.map((tech) => (
              <span
                key={tech}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>

          <select
            onChange={(e) => handleAddTech(e.target.value)}
            className="w-full p-2 border rounded bg-[#0f0f23d2]"
            value=""
          >
            <option value="" disabled>
              Select tech to add
            </option>
            {techOptions
              .filter((tech) => !selectedTechs.includes(tech))
              .map((tech, idx) => (
                <option key={idx} value={tech}>
                  {tech}
                </option>
              ))}
          </select>
        </div>

        <div className="col-span-2">
          <label className="font-semibold">Features (comma separated)</label>
          <input
            {...register("features", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="add garden tips, update garden tips"
          />
        </div>

        <div>
          <label className="font-semibold">Your Role</label>
          <input
            {...register("role", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Full-stack Developer"
          />
        </div>

        <div>
          <label className="font-semibold">
            Responsibilities (comma separated)
          </label>
          <input
            {...register("responsibilities", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Handled backend, API integration"
          />
        </div>

        <div>
          <label className="font-semibold">Live Link</label>
          <input
            {...register("live", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="https://project-link.com"
          />
        </div>

        <div>
          <label className="font-semibold">Client Repo</label>
          <input
            {...register("clientRepo", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="https://github.com/client"
          />
        </div>

        <div>
          <label className="font-semibold">Server Repo</label>
          <input
            {...register("serverRepo", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="https://github.com/server"
          />
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200 cursor-pointer"
          >
            {isPending ? 'adding.....' : 'Submit Project'}
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
