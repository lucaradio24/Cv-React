import { useState } from "react";
import { General } from "./General";
import { GeneralPrvw } from "./GeneralPrvw";
import "./index.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { EducationPrvw } from "./EducationPrvw";
import { ExperiencePrvw } from "./ExperiencePrvw";

export function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    location:'',
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    description: "",
  });

  return (
    <div className="app-container">
      <div className="cv-builder">
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
