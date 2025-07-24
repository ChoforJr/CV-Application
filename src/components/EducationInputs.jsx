export function EducationInputs({
  educations,
  currentEducation,
  onChangeED,
  onChangeSelEdId,
}) {
  return (
    <section className="eductionInputs">
      <h2>Education</h2>
      <select name="educations" id="educationList" onChange={onChangeSelEdId}>
        {educations.map((education) => (
          <option key={"opt" + education.id} value={education.id}>
            {education.degree}
          </option>
        ))}
      </select>
      <EducationInputFields
        currentEducation={currentEducation}
        onChangeED={onChangeED}
        educations={educations}
      />
    </section>
  );
}

function EducationInputFields({ educations, currentEducation, onChangeED }) {
  return (
    <div key={educations[currentEducation].id}>
      <label>
        Degree{" "}
        <input
          name="degree"
          className="degree"
          type="text"
          placeholder="Degree"
          value={educations[currentEducation].degree}
          onChange={onChangeED}
        />
      </label>
      <label>
        School Name{" "}
        <input
          name="schoolName"
          className="schoolName"
          type="text"
          placeholder="School Name"
          value={educations[currentEducation].schoolName}
          onChange={onChangeED}
        />
      </label>
      <label>
        Location{" "}
        <input
          name="location"
          className="location"
          type="text"
          placeholder="Location"
          value={educations[currentEducation].location}
          onChange={onChangeED}
        />
      </label>
      <label>
        Start Date{" "}
        <input
          name="startDate"
          className="startDate"
          type="text"
          placeholder="Start Date"
          value={educations[currentEducation].startDate}
          onChange={onChangeED}
        />
      </label>
      <label>
        End Date{" "}
        <input
          name="endDate"
          className="endDate"
          type="text"
          placeholder="End Date"
          value={educations[currentEducation].endDate}
          onChange={onChangeED}
        />
      </label>
      <label>
        Description{" "}
        <textarea
          name="description"
          className="description"
          onChange={onChangeED}
          placeholder="Description"
          value={educations[currentEducation].description}
        />
      </label>
    </div>
  );
}
