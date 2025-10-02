export function EducationPrvw({ education }) {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>Education</h3>
      {education.map((item, index) => (
        <div key={index} className="education-prvw-item">  
        <p>School name: {item.schoolName}</p>
        <p>Title of study: {item.titleOfStudy}</p>
        <p>Grade: {item.grade}</p>
        </div>
      )
       )}
    </>
  );
}
