import { useEffect, useState } from "react";
import { Modal, ModalContent } from "../Componentes/Modal";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Componentes/Loader";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useUpdateImgBB from "../hooks/useUpdateImgBB";

const AllSkills = () => {
  const [openModal, setOpenModal] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState({});
  const { register, isPending, reset, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axiosSecure.get("/add_skills");
      return res.data;
    },
  });

  useEffect(() => {
    if (selectedSkill) {
      reset({
        skill_designation: selectedSkill.skill_designation,
        type: selectedSkill.type,
        level: selectedSkill.level,
        icon_image_url: selectedSkill.icon_image_url || "",
      });
    }
  }, [selectedSkill]);

  const handleData = (id) => {
    if (selectedSkill) {
      setSelectedSkill(null);
    }
    const skill = data.find((d) => d._id === id);
    setSelectedSkill(skill);
  };

  //   Delete Button

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/delete_skills/${id}`);
    if (res.data.deletedCount) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      setOpenModal(null);
      refetch();
    }
  };

  // update button

  const handleUpdate = async (id, data) => {
    if (!data.icon_image_url?.[0]) {
      console.log("No image to upload");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    const imageURl = await useUpdateImgBB(data.icon_image_url?.[0]);
    data.icon_image_url = imageURl;
    const res = await axiosSecure.patch(`/update_skills/${id}`, data);
    if (res.data.modifiedCount) {
      console.log(res);
      Swal.fire({
        title: "Success!",
        text: "Skill has been updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      console.log(res.modifiedCount);
      setOpenModal(null);
      refetch();
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((skill) => (
          <div
            key={skill._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-xl hover:scale-[1.02] transition text-white"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{skill.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-300">{skill.designation}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-2">
              <h1>{skill?.type}</h1>
              <div className="flex justify-between text-sm my-1">
                <span>Skill Level</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-sky-400 to-indigo-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => {
                  handleData(skill._id);
                  setOpenModal("details");
                }}
                className="flex-1 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/40"
              >
                Details
              </button>

              <button
                onClick={() => {
                  handleData(skill._id);
                  setOpenModal("update");
                }}
                className="flex-1 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/40"
              >
                Update
              </button>

              <button
                onClick={() => {
                  setSelectedSkill(skill);
                  setOpenModal("delete");
                }}
                className="flex-1 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/40"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModal && selectedSkill && (
        <Modal onClose={() => setOpenModal(null)}>
          {openModal === "details" && (
            <ModalContent title="Skill Details">
              <p>
                <b>Name:</b> {selectedSkill.type}
              </p>
              <p>
                <b>Designation:</b> {selectedSkill.skill_designation}
              </p>
              <p>
                <b>Percentage:</b> {selectedSkill.level}%
              </p>
            </ModalContent>
          )}

          {openModal === "update" && (
            <ModalContent title="Update Skill">
              <div className=" flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4">
                <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
                  {/* Header */}
                  <div className="px-6 py-5 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                      Update Skills
                    </h2>
                    <p className="text-sm text-gray-300 mt-1">
                      Update your professional skills to the dashboard
                    </p>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit((data) =>
                      handleUpdate(selectedSkill._id, data)
                    )}
                    className="p-6 space-y-5"
                  >
                    {/* Skill Designation */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Skill Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        placeholder={selectedSkill.skill_designation}
                        defaultValue={selectedSkill.skill_designation}
                        {...register("skill_designation", { required: true })}
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
                        placeholder={selectedSkill.type}
                        {...register("type", { required: true })}
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
                        placeholder={`${selectedSkill.level}%`}
                        min="0"
                        max="100"
                        {...register("level", { required: true })}
                        className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-400"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-4 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold tracking-wide hover:opacity-90 transition"
                    >
                      {isPending ? "Adding......." : "Update Skill"}
                    </button>
                  </form>
                </div>
              </div>
            </ModalContent>
          )}

          {openModal === "delete" && (
            <ModalContent title="Delete Skill">
              <p className="text-red-400">
                Are you sure you want to delete this skill?
              </p>
              <button
                onClick={() => handleDelete(selectedSkill._id)}
                className="mt-4 px-4 py-2 bg-red-500 rounded-lg"
              >
                Confirm Delete
              </button>
            </ModalContent>
          )}
        </Modal>
      )}
    </>
  );
};

export default AllSkills;
