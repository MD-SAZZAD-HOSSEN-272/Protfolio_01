import SkillBar from "react-skillbars";

const SkillBars = () => {
  const front_end = [
    { type: "HTML5", level: 95 },
    { type: "CSS3", level: 75 },
    { type: "JavaScript", level: 80 },
    { type: "React", level: 70 },
    { type: "Tailwind ", level: 85 },
    {type: "Next.Js", level: 70}
  ];

  const back_end = [
    { type: "Node.-400", level: 65 },
    { type: "Express.-400", level: 60 },
    { type: "MongoDB", level: 70 },
    { type: "Firebase", level: 60 },
  ];

  const tools = [
    {type: 'Vs code', level: 85},
    {type: "GitHub", level: 90,},
    {type: 'Git', level: 65},
    {type: 'Figma', level: 80}
  ]

  const colors = {
    bar: "#6b21a8",
    title: {
      text: "white",
      background: "#6b21a8",
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
      <div className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop">
        <h1 className="text-purple-400 text-2xl font-bold mb-5 ">Front End</h1>
        <SkillBar
        skills={front_end}
        animationDuration={5000}
        animationThreshold={0.8}
        colors={colors}
        animationDelay={200}
      />
      </div>
      <div className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop">
      <h1 className="text-purple-400 text-2xl font-bold mb-5 ">Back End</h1>
        <SkillBar
        skills={back_end}
        animationDuration={5000}
        animationThreshold={0.8}
        colors={colors}
        animationDelay={200}
      />
      </div>
      <div className="border border-purple-600 p-5 rounded-2xl bg-gray-700/40 backdrop">
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
