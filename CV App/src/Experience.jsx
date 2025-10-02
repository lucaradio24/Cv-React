import { useState } from "react";

export function Experience({ experience, setExperience }) {
  
  
  return (


    <div className="card">
            <h1>Work experience</h1>

      <label for='companyName'>Company name</label>
      <input
        name="companyName"
        type="text"
        value={experience.companyName}
        onChange={(e) =>
          setExperience({ ...experience, companyName: e.target.value })
        }
      />
      <label for='positionTitle'>Position title</label>
      <input
        type="text"
        value={experience.positionTitle}
        onChange={(e) =>
          setExperience({ ...experience, positionTitle: e.target.value })
        }
      />

      <label for='description'>Job description</label>
      <input
        name="description"
        type="text"
        value={experience.description}
        onChange={(e) =>
          setExperience({ ...experience, description: e.target.value })
        }
      />
    </div>
  );
}
