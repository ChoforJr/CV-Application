export function EducationCV({ educations }) {
  return (
    <section className="educationCV">
      <h2>Education</h2>
      {educations.map((education) => (
        <div key={education.id} className="educationSet">
          <h3 className="educationCVSchoolN">{education.schoolName}</h3>
          <h3 className="educationCVPeriod">
            {education.startDate} - {education.endDate}
          </h3>
          <p className="educationCVDeg">{education.degree}</p>
          <p className="educationCVLoc">{education.location}</p>
          <p className="educationCVDes">{education.description}</p>
        </div>
      ))}
    </section>
  );
}
