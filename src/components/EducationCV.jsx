export function EducationCV({ educations }) {
  return (
    <section className="educationCV">
      <h2>Education</h2>
      {educations.map((education) => (
        <div key={education.id}>
          <h3>{education.schoolName}</h3>
          <h3>
            {education.startDate} - {education.endDate}
          </h3>
          <p>{education.degree}</p>
          <p>{education.location}</p>
          <p>{education.description}</p>
        </div>
      ))}
    </section>
  );
}
