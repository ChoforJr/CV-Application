export function EducationCV({ educations }) {
  return (
    <section className="educationCV">
      <h2>Education</h2>
      <div key={educations[0].id}>
        <h3>{educations[0].schoolName}</h3>
        <h3>
          {educations[0].startDate} - {educations[0].endDate}
        </h3>
        <p>{educations[0].degree}</p>
        <p>{educations[0].location}</p>
        <p>{educations[0].description}</p>
      </div>
    </section>
  );
}
