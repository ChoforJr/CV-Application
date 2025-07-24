export function EducationInputs({ educations, onChangeED }) {
  return (
    <section className="eductionInputs">
      <h2>Education</h2>
      {educations.map((education) => (
        <div key={education.id}>
          <label>
            Degree{" "}
            <input
              id="degree"
              type="text"
              placeholder="Degree"
              value={education.degree}
              onChange={onChangeED}
            />
          </label>
          <label>
            School Name{" "}
            <input
              id="schoolName"
              type="text"
              placeholder="School Name"
              value={education.schoolName}
              onChange={onChangeED}
            />
          </label>
          <label>
            Location{" "}
            <input
              id="location"
              type="text"
              placeholder="Location"
              value={education.location}
              onChange={onChangeED}
            />
          </label>
          <label>
            Start Date{" "}
            <input
              id="startDate"
              type="text"
              placeholder="Start Date"
              value={education.startDate}
              onChange={onChangeED}
            />
          </label>
          <label>
            End Date{" "}
            <input
              id="endDate"
              type="text"
              placeholder="End Date"
              value={education.endDate}
              onChange={onChangeED}
            />
          </label>
          <label>
            Description{" "}
            <textarea
              name="description"
              id="description"
              onChange={onChangeED}
              placeholder="Description"
            >
              {education.description}
            </textarea>
          </label>
        </div>
      ))}
    </section>
  );
}
