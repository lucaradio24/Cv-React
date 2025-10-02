export function Education({ education, setEducation }) {
  function handleAddEducation() {
    setEducation(() => [
      ...education,
      { schoolName: "", titleOfStudy: "", grade: "", isOpen: true },
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

  return (
    <div className="card">
      <h1>Education</h1>
      <button onClick={handleAddEducation}>Add education</button>

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
              toggleIsOpen(index)};
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

            <span>
              <button type="submit">Save</button>
              <button type="button" onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </span>
          </form>
        ) : (
          <p
            className="education-item"
            key={index}
            onClick={() => toggleIsOpen(index)}
          >
            {item.schoolName}{" "}
          </p>
        )
      )}
    </div>
  );
}
