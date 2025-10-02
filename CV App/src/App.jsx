import { useState } from "react";
import { General } from "./General";
import { GeneralPrvw } from "./GeneralPrvw";
import './index.css';


export function App(){
const [general, setGeneral] = useState({
    name: '',
    email:'',
    phone:''
})

const [education, setEducation] = useState({
        schoolName:'',
        titleOfStudy:'',
        grade:'',
    })

const [experience, setExperience] = useState({
    companyName:'',
    positionTitle:'',
    description:'',
})

return (
    <div className="app-container">
    <div className="cv-builder">
        
    <General general={general} setGeneral={setGeneral} />
    <Education education={education} setEducation={setEducation} />
    <Experience experience={experience} setExperience={setExperience} />
    
    </div>
    
    <div className="cv-preview">

    <GeneralPrvw general= {general} />
    <EducationPrvw education={education} />
    <ExperiencePrvw experience={experience} />
    
    </div>
    </div>
)
}

function Education({education, setEducation}){
   

    return (
        <>
        <input type="text" value={education.schoolName} onChange={(e) => setEducation({...education, schoolName:e.target.value})}/>
        <input type="text" value={education.titleOfStudy} onChange={(e) => setEducation({...education, titleOfStudy:e.target.value})}/>
        <input type="text" value={education.grade} onChange={(e) => setEducation({...education, grade:e.target.value})}/>
        </>
        
    )
}

function EducationPrvw({education}){
    return (
        <>
        <p>School name: {education.schoolName}</p>
        <p>Title of study: {education.titleOfStudy}</p>
        <p>Grade: {education.grade}</p>
        </>
    )
}

function Experience({experience, setExperience}){
    return (
        <>
        <input type="text" value={experience.companyName} onChange={(e) => setExperience({...experience, companyName: e.target.value})} />
        <input type="text" value={experience.positionTitle} onChange={(e) => setExperience({...experience, positionTitle: e.target.value})} />
        <input type="text" value={experience.description} onChange={(e) => setExperience({...experience, description: e.target.value})} />
        </>
    )

}

function ExperiencePrvw({experience}){
    return (
        <>
        <p>Company name: {experience.companyName}</p>
        <p>Position title: {experience.positionTitle}</p>
        <p>Job description: {experience.description}</p>
        </>
    )
}

