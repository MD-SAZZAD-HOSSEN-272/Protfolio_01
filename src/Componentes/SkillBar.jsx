import SkillBar from "react-skillbars";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const SkillBars = () => {
  const axiosSecure = useAxiosSecure();
  const [frontEnd, setFrontEnd] = useState([])
  const [backEnd, setBackEnd] = useState([])
  const [tools, setTools] = useState([])

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/add_skills`);
      return res.data;
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    const formate = (items) => {
      console.log(items);
      return items.map((item) => ({
        skill_designation: item.skill_designation,
        type: item.type,
        level: Number(item.level)
      }))
    }
    if(!data?.length) return
    const front = formate( data?.filter(d => d.skill_designation.toLowerCase() === 'front end'))
    setFrontEnd(front)

    const back = formate( data?.filter(d => d.skill_designation.toLowerCase() === 'back end'))
    setBackEnd(back)

    const tools = formate( data?.filter(d => d.skill_designation.toLowerCase() === 'tool' || d.skill_designation.toLowerCase() === 'tools'))
    setTools(tools)
  }, [data])

  console.log(tools);

  if(isLoading) return <Loader></Loader>

  const front_end = [
    { type: "HTML5", level: 95 },
    { type: "CSS3", level: 75 },
    { type: "JavaScript", level: 80 },
    { type: "React", level: 70 },
    { type: "Tailwind ", level: 85 },
    { type: "Next.Js", level: 70 },
  ];

  const back_end = [
    { type: "Node.-400", level: 65 },
    { type: "Express.-400", level: 60 },
    { type: "MongoDB", level: 70 },
    { type: "Firebase", level: 60 },
  ];

  const toolss = [
    { type: "Vs code", level: 85 },
    { type: "GitHub", level: 90 },
    { type: "Git", level: 65 },
    { type: "Figma", level: 80 },
  ];

  const colors = {
    bar: "#6b21a8",
    title: {
      text: "white",
      background: "#6b21a8",
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
      
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="2000"
          className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop"
        >
          <h1 className="text-purple-400 text-2xl font-bold mb-5 ">
            Front End
          </h1>
          <SkillBar
            skills={frontEnd}
            animationDuration={5000}
            animationThreshold={0.8}
            colors={colors}
            animationDelay={200}
          />
        </div>
      
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop"
      >
        <h1 className="text-purple-400 text-2xl font-bold mb-5 ">Back End</h1>
        <SkillBar
          skills={backEnd}
          animationDuration={5000}
          animationThreshold={0.8}
          colors={colors}
          animationDelay={200}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="1000"
        className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop"
      >
        <h1 className="text-purple-400 text-2xl font-bold mb-5 ">Tools</h1>
        <SkillBar
          skills={tools}
          animationDuration={5000}
          animationThreshold={0.8}
          colors={colors}
          animationDelay={200}
        />
      </div>
    </div>
  );
};

export default SkillBars;
