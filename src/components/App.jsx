import { useState } from "react";
import { Aside } from "./Aside";
import { Resume } from "./Resume";
import "../syles/App.css";

function App() {
  const [personalDetails, setpersonalDetails] = useState({
    fullName: "Henry Danger",
    email: "henrydanger@gmail.com",
    phoneNumber: "(+1) 561-555-7689",
    location: "Swell View",
  });

  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      degree: "Masters In Super-Heroics",
      schoolName: "Captain Man University",
      location: "Man Cave, Swell View",
      startDate: "2012",
      endDate: "2018",
      description: "GPA: 4.0 - Best Sidekick",
    },
    {
      id: crypto.randomUUID(),
      degree: "Bachelors In Super-Heroics",
      schoolName: "Captain Man University",
      location: "Man Cave, Swell View",
      startDate: "2008",
      endDate: "2012",
      description: "GPA: 3.8 - Quick on his feet",
    },
  ]);

  const [selectedEdId, setSelectedEdId] = useState(educations[0].id);
  const currentEducation = educations.findIndex(
    (item) => item.id == selectedEdId
  );

  function handleSelectedEdIdChange(event) {
    setSelectedEdId(event.target.value);
  }

  function handlePDChange(event) {
    if (event.target.id === "fullName") {
      setpersonalDetails({ ...personalDetails, fullName: event.target.value });
    } else if (event.target.id === "email") {
      setpersonalDetails({ ...personalDetails, email: event.target.value });
    } else if (event.target.id === "phoneNumber") {
      setpersonalDetails({
        ...personalDetails,
        phoneNumber: event.target.value,
      });
    } else if (event.target.id === "location") {
      setpersonalDetails({ ...personalDetails, location: event.target.value });
    }
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

  return (
    <>
      <Aside
        personalDetails={personalDetails}
        onChangePD={handlePDChange}
        educations={educations}
        onChangeED={handleEdChange}
        currentEducation={currentEducation}
        onChangeSelEdId={handleSelectedEdIdChange}
      />
      <Resume personalDetails={personalDetails} educations={educations} />
    </>
  );
}

export default App;
