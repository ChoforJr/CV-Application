export function EducationInputs({
  educations,
  setEducations,
  selectedEdId,
  setSelectedEdId,
}) {
  const currentEducation = educations.findIndex(
    (item) => item.id == selectedEdId
  );

  function handleSelectedEdIdChange(event) {
    setSelectedEdId(event.target.value);
  }

  function handleEdChange(event) {
    const { className, value } = event.target;

    if (!selectedEdId) {
      console.warn("selectedEdId is not defined. Cannot update education.");
      return;
    }

    const updatedEducations = educations.map((education) => {
      if (education.id === selectedEdId) {
        return {
          ...education,
          [className]: value,
        };
      }
      return education;
    });

    setEducations(updatedEducations);
  }

  function addEducation() {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        degree: "",
        schoolName: "Swell View Junior High",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  }
  function deleteEducation() {
    if (selectedEdId === educations[0].id) {
      setSelectedEdId(educations[1].id);
    } else {
      setSelectedEdId(educations[0].id);
    }
    setEducations((educations) =>
      educations.filter((education) => education.id !== selectedEdId)
    );
  }
  return (
    <section className="eductionInputs">
      <div className="educationHeader">
        <h2>Education</h2>
        <button onClick={addEducation} className="addEd">
          Add Education
        </button>
      </div>
      <div className="educationNav">
        <p>Select Education Entry:</p>
        <select
          name="educations"
          id="educationList"
          onChange={handleSelectedEdIdChange}
        >
          {educations.map((education) => (
            <option key={"opt" + education.id} value={education.id}>
              {education.schoolName}
            </option>
          ))}
        </select>
        <button
          onClick={deleteEducation}
          disabled={educations.length < 2 ? true : false}
          className="deleteEd"
        >
          Delete
        </button>
      </div>
      <EducationInputFields
        currentEducation={currentEducation}
        onChangeED={handleEdChange}
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

// export function EducationInputs({
//   educations,
//   currentEducation,
//   onChangeED,
//   onChangeSelEdId,
//   onAddEd,
//   onDeleteEd,
// }) {
//   return (
//     <section className="eductionInputs">
//       <div className="educationHeader">
//         <h2>Education</h2>
//         <button onClick={onAddEd} className="addEd">
//           Add Education
//         </button>
//       </div>
//       <div className="educationNav">
//         <p>Select Education Entry:</p>
//         <select name="educations" id="educationList" onChange={onChangeSelEdId}>
//           {educations.map((education) => (
//             <option key={"opt" + education.id} value={education.id}>
//               {education.schoolName}
//             </option>
//           ))}
//         </select>
//         <button
//           onClick={onDeleteEd}
//           disabled={educations.length < 2 ? true : false}
//           className="deleteEd"
//         >
//           Delete
//         </button>
//       </div>
//       <EducationInputFields
//         currentEducation={currentEducation}
//         onChangeED={onChangeED}
//         educations={educations}
//       />
//     </section>
//   );
// }

// function EducationInputFields({ educations, currentEducation, onChangeED }) {
//   return (
//     <div key={educations[currentEducation].id}>
//       <label>
//         Degree{" "}
//         <input
//           name="degree"
//           className="degree"
//           type="text"
//           placeholder="Degree"
//           value={educations[currentEducation].degree}
//           onChange={onChangeED}
//         />
//       </label>
//       <label>
//         School Name{" "}
//         <input
//           name="schoolName"
//           className="schoolName"
//           type="text"
//           placeholder="School Name"
//           value={educations[currentEducation].schoolName}
//           onChange={onChangeED}
//         />
//       </label>
//       <label>
//         Location{" "}
//         <input
//           name="location"
//           className="location"
//           type="text"
//           placeholder="Location"
//           value={educations[currentEducation].location}
//           onChange={onChangeED}
//         />
//       </label>
//       <label>
//         Start Date{" "}
//         <input
//           name="startDate"
//           className="startDate"
//           type="text"
//           placeholder="Start Date"
//           value={educations[currentEducation].startDate}
//           onChange={onChangeED}
//         />
//       </label>
//       <label>
//         End Date{" "}
//         <input
//           name="endDate"
//           className="endDate"
//           type="text"
//           placeholder="End Date"
//           value={educations[currentEducation].endDate}
//           onChange={onChangeED}
//         />
//       </label>
//       <label>
//         Description{" "}
//         <textarea
//           name="description"
//           className="description"
//           onChange={onChangeED}
//           placeholder="Description"
//           value={educations[currentEducation].description}
//         />
//       </label>
//     </div>
//   );
// }
