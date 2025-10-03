export function EducationPrvw({ education }) {
  return (
    <>
      <h3 className="title">Education</h3>
      {education.map((item, index) => (
      <div key={index} className="education-info">
            
          <div className="education-info-group">
          <p>{item.startDate} - {item.endDate}</p>
        <p>Grade: {item.grade}</p>
          </div>
          <div className="education-info-group">
        <p className="bold-text">{item.schoolName}</p>
        <p>{item.titleOfStudy}</p>
            </div>
        </div>
      )
    )}
    </>
  );
}
