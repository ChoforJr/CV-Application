import { useState } from "react";
import { PersonalDetailsInput } from "./PersonalDetailsInput";
import { EducationInputs } from "./EducationInputs";
import { WorksInput } from "./WorksInput";

export function Aside({
  personalDetails,
  setpersonalDetails,
  educations,
  setEducations,
  selectedEdId,
  setSelectedEdId,
  works,
  setWorks,
  selectedWkId,
  setSelectedWkId,
}) {
  const [activeInput, setActiveInput] = useState(1);
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
        isActive={activeInput === 1}
        onShow={() => {
          if (activeInput === 1) {
            setActiveInput(0);
          } else {
            setActiveInput(1);
          }
        }}
      />
      <WorksInput
        works={works}
        setWorks={setWorks}
        selectedWkId={selectedWkId}
        setSelectedWkId={setSelectedWkId}
        isActive={activeInput === 2}
        onShow={() => {
          if (activeInput === 2) {
            setActiveInput(0);
          } else {
            setActiveInput(2);
          }
        }}
      />
    </aside>
  );
}
