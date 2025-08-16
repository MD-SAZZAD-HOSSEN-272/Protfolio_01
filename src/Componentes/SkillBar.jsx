import SkillBar from "react-skillbars";

const SkillBars = () => {
    const skills = [
      {type: "HTML5",  level: 95},
      {type: "CSS3", level: 75  },
      {type: "JavaScript", level: 80  },
      {type: "React",  level: 70 },
      {type: "Tailwind ", level: 85 },
      {type: "Node.-400", level: 65  },
      {type: "Express.-400" , level: 60 },
      {type: "MongoDB",  level: 70 },
      {type: "Firebase", level: 60 },
      {
        type: "GitHub",
        level: 90,
      },
    ];

    const colors = {
      bar: '#6b21a8',
      title: {
        text: 'white',
        background: '#6b21a8'
      }
    }
    return (
        <div>
            <SkillBar skills={skills} animationDuration={5000} animationThreshold={0.8} colors={colors} animationDelay={200}/>
        </div>
    );
};

export default SkillBars;