import { PersonalDetailsInput } from "./PersonalDetailsInput";
import { EducationInputs } from "./EducationInputs";

export function Aside({
  personalDetails,
  setpersonalDetails,
  educations,
  setEducations,
  selectedEdId,
  setSelectedEdId,
}) {
  return (
    <aside>
      <PersonalDetailsInput
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
      />
      <EducationInputs
        educations={educations}
        setEducations={setEducations}
        selectedEdId={selectedEdId}
        setSelectedEdId={setSelectedEdId}
      />
    </aside>
  );
}

// import { PersonalDetailsInput } from "./PersonalDetailsInput";
// import { EducationInputs } from "./EducationInputs";

// export function Aside({
//   personalDetails,
//   onChangePD,
//   educations,
//   onChangeED,
//   currentEducation,
//   onChangeSelEdId,
//   onAddEd,
//   onDeleteEd,
// }) {
//   return (
//     <aside>
//       <PersonalDetailsInput
//         personalDetails={personalDetails}
//         onChangePD={onChangePD}
//       />
//       <EducationInputs
//         currentEducation={currentEducation}
//         onChangeED={onChangeED}
//         educations={educations}
//         onChangeSelEdId={onChangeSelEdId}
//         onAddEd={onAddEd}
//         onDeleteEd={onDeleteEd}
//       />
//     </aside>
//   );
// }
