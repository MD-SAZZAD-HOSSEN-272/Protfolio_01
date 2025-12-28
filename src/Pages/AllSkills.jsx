import { useState } from "react";
import { Modal, ModalContent } from "../Componentes/Modal";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Componentes/Loader";

const AllSkills = () => {
  const [openModal, setOpenModal] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState({});

  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axiosSecure.get("/add_skills");
      return res.data;
    },
  });

  const handleData = (id) => {

    const skill = data.find(d => d._id === id)
    setSelectedSkill(skill)

  }
  console.log(selectedSkill);

  

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
                  setSelectedSkill(skill);
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
              <p><b>Name:</b> {selectedSkill.type}</p>
              <p><b>Designation:</b> {selectedSkill.skill_designation}</p>
              <p><b>Percentage:</b> {selectedSkill.level}%</p>
            </ModalContent>
          )}

          {openModal === "update" && (
            <ModalContent title="Update Skill">
              <p>Update form will go here ✏️</p>
            </ModalContent>
          )}

          {openModal === "delete" && (
            <ModalContent title="Delete Skill">
              <p className="text-red-400">
                Are you sure you want to delete this skill?
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 rounded-lg">
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
