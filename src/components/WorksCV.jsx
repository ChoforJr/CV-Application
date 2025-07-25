export function WorksCV({ works }) {
  return (
    <section className="educationCV">
      <h2>Work Experience</h2>
      {works.map((work) => (
        <div key={work.id}>
          <h3>{work.companyName}</h3>
          <h3>
            {work.startDate} - {work.endDate}
          </h3>
          <p>{work.positionTitle}</p>
          <p>{work.location}</p>
          <p>{work.description}</p>
        </div>
      ))}
    </section>
  );
}
