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
  ]);
  function handlePDChange(e) {
    if (e.target.id === "fullName") {
      setpersonalDetails({ ...personalDetails, fullName: e.target.value });
    } else if (e.target.id === "email") {
      setpersonalDetails({ ...personalDetails, email: e.target.value });
    } else if (e.target.id === "phoneNumber") {
      setpersonalDetails({ ...personalDetails, phoneNumber: e.target.value });
    } else if (e.target.id === "location") {
      setpersonalDetails({ ...personalDetails, location: e.target.value });
    }
  }
  function handleEdChange(e) {}
  return (
    <>
      <Aside
        personalDetails={personalDetails}
        onChangePD={handlePDChange}
        educations={educations}
        onChangeED={handleEdChange}
      />
      <Resume personalDetails={personalDetails} educations={educations} />
    </>
  );
}

export default App;
