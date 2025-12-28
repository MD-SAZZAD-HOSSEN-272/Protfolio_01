
import { useForm } from "react-hook-form";
import useUpdateImgBB from "../hooks/useUpdateImgBB";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AddSkills = () => {

    const axiosSecure = useAxiosSecure();

  const {register, handleSubmit, reset} = useForm()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/add_skills", data);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Skills has been added successfully",
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
    const imageURl = await useUpdateImgBB(data.icon_image_url?.[0]);
    data.icon_image_url = imageURl;
    mutate(data)
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            ➕ Add Skills
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Add your professional skills to the dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          {/* Skill Designation */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Skill Designation
            </label>
            <input
              type="text"
              name="designation"
              placeholder="front end | back end | tools"
              {...register('skill_designation', {required: true})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Skill Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Skill Name
            </label>
            <input
              type="text"
              name="type"
              placeholder="React / JavaScript"
              {...register('type', {required: true})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Skill Icon */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Skill Icon (URL or Emoji)
            </label>
            <input
            type="file"
            {...register("icon_image_url")}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="icon"
          />
          </div>

          {/* Skill Percentage */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Skill Percentage
            </label>
            <input
              type="number"
              name="Level"
              placeholder="85"
              min="0"
              max="100"
              {...register('level', {required: true})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold tracking-wide hover:opacity-90 transition"
          >
           {isPending ? 'Adding.......' :  ' Save Skill'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
