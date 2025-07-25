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

  const [works, setWorks] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "Captain Man Crime Fighter",
      positionTitle: "Sidekick",
      location: "Man Cave, Swell View",
      description:
        "Going around Swell View beating-up bad guys using my shield power to protect citizens",
      startDate: "2012",
      endDate: "2018",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Captain Man Crime Fighter",
      positionTitle: "Sidekick",
      location: "Man Cave, Swell View",
      description:
        "Going around Swell View beating-up bad guys using my hyper mobility to give bad guys especially Drex a serious beating",
      startDate: "2008",
      endDate: "2012",
    },
  ]);

  const [selectedEdId, setSelectedEdId] = useState(educations[0].id);

  return (
    <>
      <Aside
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
        educations={educations}
        setEducations={setEducations}
        selectedEdId={selectedEdId}
        setSelectedEdId={setSelectedEdId}
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

// import { useState } from "react";
// import { Aside } from "./Aside";
// import { Resume } from "./Resume";
// import "../syles/App.css";

// function App() {
//   const [personalDetails, setpersonalDetails] = useState({
//     fullName: "Henry Danger",
//     email: "henrydanger@gmail.com",
//     phoneNumber: "(+1) 561-555-7689",
//     location: "Swell View",
//   });

//   const [educations, setEducations] = useState([
//     {
//       id: crypto.randomUUID(),
//       degree: "Masters In Super-Heroics",
//       schoolName: "Captain Man University",
//       location: "Man Cave, Swell View",
//       startDate: "2012",
//       endDate: "2018",
//       description: "GPA: 4.0 - Best Sidekick",
//     },
//     {
//       id: crypto.randomUUID(),
//       degree: "Bachelors In Super-Heroics",
//       schoolName: "Captain Man University",
//       location: "Man Cave, Swell View",
//       startDate: "2008",
//       endDate: "2012",
//       description: "GPA: 3.8 - Quick on his feet",
//     },
//   ]);

//   const [works, setWorks] = useState([
//     {
//       id: crypto.randomUUID(),
//       companyName: "Captain Man Crime Fighter",
//       positionTitle: "Sidekick",
//       location: "Man Cave, Swell View",
//       description:
//         "Going around Swell View beating-up bad guys using my shield power to protect citizens",
//       startDate: "2012",
//       endDate: "2018",
//     },
//     {
//       id: crypto.randomUUID(),
//       companyName: "Captain Man Crime Fighter",
//       positionTitle: "Sidekick",
//       location: "Man Cave, Swell View",
//       description:
//         "Going around Swell View beating-up bad guys using my hyper mobility to give bad guys especially Drex a serious beating",
//       startDate: "2008",
//       endDate: "2012",
//     },
//   ]);

//   const [selectedEdId, setSelectedEdId] = useState(educations[0].id);
//   const currentEducation = educations.findIndex(
//     (item) => item.id == selectedEdId
//   );

//   function handleSelectedEdIdChange(event) {
//     setSelectedEdId(event.target.value);
//   }

//   function handlePDChange(event) {
//     if (event.target.id === "fullName") {
//       setpersonalDetails({ ...personalDetails, fullName: event.target.value });
//     } else if (event.target.id === "email") {
//       setpersonalDetails({ ...personalDetails, email: event.target.value });
//     } else if (event.target.id === "phoneNumber") {
//       setpersonalDetails({
//         ...personalDetails,
//         phoneNumber: event.target.value,
//       });
//     } else if (event.target.id === "location") {
//       setpersonalDetails({ ...personalDetails, location: event.target.value });
//     }
//   }

//   function handleEdChange(event) {
//     const { className, value } = event.target;

//     if (!selectedEdId) {
//       console.warn("selectedEdId is not defined. Cannot update education.");
//       return;
//     }

//     const updatedEducations = educations.map((education) => {
//       if (education.id === selectedEdId) {
//         return {
//           ...education,
//           [className]: value,
//         };
//       }
//       return education;
//     });

//     setEducations(updatedEducations);
//   }

//   function addEducation() {
//     setEducations([
//       ...educations,
//       {
//         id: crypto.randomUUID(),
//         degree: "",
//         schoolName: "Swell View Junior High",
//         location: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ]);
//   }
//   function deleteEducation() {
//     if (selectedEdId === educations[0].id) {
//       setSelectedEdId(educations[1].id);
//     } else {
//       setSelectedEdId(educations[0].id);
//     }
//     setEducations((educations) =>
//       educations.filter((education) => education.id !== selectedEdId)
//     );
//   }

//   return (
//     <>
//       <Aside
//         personalDetails={personalDetails}
//         onChangePD={handlePDChange}
//         educations={educations}
//         onChangeED={handleEdChange}
//         currentEducation={currentEducation}
//         onChangeSelEdId={handleSelectedEdIdChange}
//         onAddEd={addEducation}
//         onDeleteEd={deleteEducation}
//       />
//       <Resume personalDetails={personalDetails} educations={educations} />
//     </>
//   );
// }

// export default App;
