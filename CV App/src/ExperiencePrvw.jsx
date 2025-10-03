export function ExperiencePrvw({ experience }) {
  return (
    <>
      <h3 className="title">Professional Experience</h3>
      {experience.map((item, index) => (
      <>
      <div key={index} className="experience-info">
      
      <div className="experience-info-group">
          <p>{item.startDate} - {item.endDate}</p>
         
      </div>

      <div className="experience-info-group">
        <p className="bold-text">{item.companyName}</p>
        <p>{item.positionTitle}</p>
        <p>{item.description}</p>
      </div>
      </div>
      </>
      ))}
      
      
    </>
  );
}
