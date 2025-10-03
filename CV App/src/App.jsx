import { useState } from "react";
import { General } from "./General";
import { GeneralPrvw } from "./GeneralPrvw";
import "./index.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { EducationPrvw } from "./EducationPrvw";
import { ExperiencePrvw } from "./ExperiencePrvw";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Actions } from "./Actions";

export function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

  const exampleGeneral = {
    name: "Luca Ambrosino",
    email: "luca.ambrosino@gmail.com",
    phone: "3319652789",
    location: "Napoli",
  };

  const exampleEducation = [
    {
      schoolName: "Università Federico II",
      titleOfStudy: "Laurea triennale Economia",
      grade:'110/110',
      startDate: "2018",
      endDate: "2021",
    },
    {
      schoolName: "The Odin Project",
      titleOfStudy: "Full-stack developer curriculum",
      startDate: "2025",
      endDate: "present",
    },
  ];

  const exampleExperience = [
    {
      companyName: "Tech Srl",
      positionTitle: "Frontend Developer",
      description: "Sviluppo interfacce React.",
      startDate: "2022",
      endDate: "2024",
    },
    {
      companyName: "Lucolo Srl",
      positionTitle: "Full-stack Developer",
      description: "Sviluppo TUTTO",
      startDate: "2024",
      endDate: "2025",
    },
  ];

  function handleLoadExample() {
    setGeneral(exampleGeneral);
    setEducation(exampleEducation);
    setExperience(exampleExperience);
  }

  function handleResetPreview() {
    
    setGeneral({});
    setEducation([]);
    setExperience([]);
  }

  return (
    <div className="app-container">
      <div className="cv-builder">
        <Actions
          handleLoadExample={handleLoadExample}
          handleResetPreview={handleResetPreview}
        />
        <General general={general} setGeneral={setGeneral} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </div>

      <div className="cv-preview">
        <div className="general-prvw">
          <GeneralPrvw general={general} />
        </div>

        <div className="education-prvw">
          <EducationPrvw education={education} />
        </div>

        <div className="experience-prvw">
          <ExperiencePrvw experience={experience} />
        </div>
      </div>
    </div>
  );
}
