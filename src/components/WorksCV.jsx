export function WorksCV({ works }) {
  return (
    <section className="workCV">
      <h2>Work Experience</h2>
      {works.map((work) => (
        <div key={work.id} className="workSet">
          <h3 className="workCVComName">{work.companyName}</h3>
          <h3 className="workCVPeriod">
            {work.startDate} - {work.endDate}
          </h3>
          <p className="workCVPos">{work.positionTitle}</p>
          <p className="workCVLoc">{work.location}</p>
          <p className="workCVDes">{work.description}</p>
        </div>
      ))}
    </section>
  );
}
