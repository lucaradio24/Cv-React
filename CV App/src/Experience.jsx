import { useState } from "react";

export function Experience({ experience, setExperience }) {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleAddExperience() {
    setExperience(() => [
      ...experience,
      {
        companyName: "",
        positionTitle: "",
        description: "",
        startDate:'',
        endDate:'',
        isOpen: true,
      },
    ]);
  }

  function toggleIsOpen(index) {
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      isOpen: !newExperience[index].isOpen,
    };
    setExperience(newExperience);
  }

  function handleDeleteItem(index) {
    setExperience(experience.filter((_, i) => i !== index));
  }

  const isAnyOpen = experience.some((item) => item.isOpen);

  return (
    <div className="card other">
      <h2 onClick={() => setIsOpen(!isOpen)}> <i class="fa-solid fa-briefcase"></i> Work experience <i className={`fa-solid fa-chevron-down${isOpen ? ' open' : ''}`}></i></h2>
      {isOpen && (
      <>
      {experience.map((item, index) =>
        item.isOpen ? (
          <form
          key={index}
          onSubmit={(e) => {
            e.preventDefault();
            if (
              !item.companyName.trim() &&
              !item.positionTitle.trim() &&
              !item.description.trim()
            ) {
              handleDeleteItem(index);
            } else {
              toggleIsOpen(index);
            }
          }}
          >
            <label for="companyName">Company name</label>
            <input
              name="companyName"
              type="text"
              value={item.companyName}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...item, companyName: e.target.value };
                setExperience(newExperience);
              }}
              />
            <label for="positionTitle">Position title</label>
            <input
              name="positionTitle"
              type="text"
              value={item.positionTitle}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = {
                  ...item,
                  positionTitle: e.target.value,
                };
                setExperience(newExperience);
              }}
              />

            <label for="description">Job description</label>
            <textarea
              name="description"
              type="textarea"
              value={item.description}
              onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index] = { ...item, description: e.target.value };
                setExperience(newExperience);
              }}
              />

              <label htmlFor="startDate">Start date</label>
              <input
              name="startDate"
              type="text"
              value={item.startDate}
              onChange={(e) => {
                const newExperience = [...experience]
                newExperience[index] = {...item, startDate: e.target.value}
                setExperience(newExperience)
              }}
              />
             
              <label htmlFor="endDate">End date</label>
              <input
              name="endDate"
              type="text"
              value={item.endDate}
              onChange={(e) => {
                const newExperience = [...experience]
                newExperience[index] = {...item, endDate: e.target.value}
                setExperience(newExperience)
              }}
              />

            <span className="buttons">
              <button className="save" type="submit">
                Save
              </button>
              <button
                className="cancel"
                onClick={() => handleDeleteItem(index)}
                >
                {" "}
                <i className="fa-solid fa-trash"></i> Delete
              </button>
            </span>
          </form>
        ) : (
          <p
          key={index}
          className="experience item"
          onClick={() => toggleIsOpen(index)}
          hidden={isAnyOpen}
          >
            {item.companyName}
          </p>
        )
      )}
      <button
        className="create-form"
        onClick={handleAddExperience}
        hidden={isAnyOpen}
        >
        Add experience
      </button>
        </>
      )}
    </div>
  );
}
