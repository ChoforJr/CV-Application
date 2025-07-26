import { useState } from "react";
import { Aside } from "./Aside";
import { Resume } from "./Resume";
import "../syles/App.css";

function App() {
  const [personalDetails, setpersonalDetails] = useState({
    fullName: "Henry Danger",
    email: "henrydanger@gmail.com",
    phoneNumber: "(+1) 561-555-7689",
    location: "Crime City",
  });

  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      degree: "Masters In Super-Heroics",
      schoolName: "Captain Man University",
      location: "Man Cave, Swell View City",
      startDate: "2012",
      endDate: "2018",
      description: "GPA: 4.0 - Best Sidekick",
    },
    {
      id: crypto.randomUUID(),
      degree: "Bachelors In Super-Heroics",
      schoolName: "Captain Man University",
      location: "Man Cave, Swell View City",
      startDate: "2008",
      endDate: "2012",
      description: "GPA: 3.8 - Quick on his feet",
    },
  ]);

  const [selectedEdId, setSelectedEdId] = useState(educations[0].id);

  const [works, setWorks] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "Freelance Heroics",
      positionTitle: "Pro-Hero",
      location: "Crime City",
      description: "Working hard on Changing Crime City to Peace City",
      startDate: "2018",
      endDate: "Present",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Captain Man Crime Fighter",
      positionTitle: "Sidekick",
      location: "Man Cave, Swell View City",
      description:
        "Going around Swell View beating-up bad guys using my shield power to protect citizens",
      startDate: "2012",
      endDate: "2018",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Captain Man Crime Fighter",
      positionTitle: "Sidekick",
      location: "Man Cave, Swell View City",
      description:
        "Going around Swell View beating-up bad guys using my hyper mobility to giving bad guys a serious beating particularly Drex ",
      startDate: "2008",
      endDate: "2012",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Junk N' Stuff",
      positionTitle: "Sales Clerk",
      location: "Some Town?, Swell View City",
      description: "Selling what ever is available ",
      startDate: "2008",
      endDate: "2008",
    },
  ]);

  const [selectedWkId, setSelectedWkId] = useState(works[0].id);

  return (
    <>
      <Aside
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
        educations={educations}
        setEducations={setEducations}
        selectedEdId={selectedEdId}
        setSelectedEdId={setSelectedEdId}
        works={works}
        setWorks={setWorks}
        selectedWkId={selectedWkId}
        setSelectedWkId={setSelectedWkId}
      />
      <Resume
        personalDetails={personalDetails}
        educations={educations}
        works={works}
      />
    </>
  );
}

export default App;
