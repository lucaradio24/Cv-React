export function ExperiencePrvw({ experience }) {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>Professional Experience</h3>
      <p>Company name: {experience.companyName}</p>
      <p>Position title: {experience.positionTitle}</p>
      <p>Job description: {experience.description}</p>
    </>
  );
}
