import { useState } from "react";

export function Education({ education, setEducation }) {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleAddEducation() {
    setEducation(() => [
      ...education,
      { schoolName: "", titleOfStudy: "", grade: "", startDate:'',
        endDate:'', isOpen: true },
    ]);
  }

  function toggleIsOpen(index) {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      isOpen: !newEducation[index].isOpen,
    };
    setEducation(newEducation);
  }

  function handleDeleteItem(index) {
    setEducation(education.filter((_, i) => i !== index));
  }

  const isAnyOpen = education.some(item => item.isOpen)

  return (
    <div className="card other">
      <h2 onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-graduation-cap"></i> Education <i className={`fa-solid fa-chevron-down${isOpen ? ' open' : ''}`}></i></h2>
    {isOpen && (
      <>
      {education.map((item, index) =>
        item.isOpen ? (
          <form
            key={index}
            onSubmit={(e) => {
              e.preventDefault();
              if (
                !item.schoolName.trim() &&
                !item.titleOfStudy.trim() &&
                !item.grade.trim()
              ) {
                handleDeleteItem(index);
              } else {
                toggleIsOpen(index);
              }
            }}
          >
            <label htmlFor="schoolName">School name</label>
            <input
              name="schoolName"
              type="text"
              value={item.schoolName}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = { ...item, schoolName: e.target.value };
                setEducation(newEducation);
              }}
            />

            <label htmlFor="titleOfStudy">Title of study</label>
            <input
              name="titleOfStudy"
              type="text"
              value={item.titleOfStudy}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = { ...item, titleOfStudy: e.target.value };
                setEducation(newEducation);
              }}
            />
            <label htmlFor="grade">Grade</label>
            <input
              name="grade"
              type="text"
              value={item.grade}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index] = { ...item, grade: e.target.value };
                setEducation(newEducation);
              }}
            />

            <label htmlFor="startDate">Start date</label>
            <input name="startDate" type="text" value={item.startDate}
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[index] = {...item, startDate: e.target.value};
              setEducation(newEducation)
            }} />
          
            <label htmlFor="endDate">End date</label>
            <input name="endDate" type="text" value={item.endDate}
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[index] = {...item, endDate: e.target.value};
              setEducation(newEducation)
            }} />

          

            <span className="buttons">
              <button type="submit" className="save">Save</button>
              <button className='cancel'type="button" onClick={() => handleDeleteItem(index)}>
               <i className="fa-solid fa-trash"></i> Delete
              </button>
            </span>
          </form>
        ) : (
          <p
            className='education item'
            key={index}
            onClick={() => toggleIsOpen(index)}
            hidden={isAnyOpen}
          >
            {item.schoolName}{" "}
          </p>
        )
      )}
      <button className='create-form' onClick={handleAddEducation} hidden={isAnyOpen}>Add education</button>
      </>
    )}
    </div>
  );
}
