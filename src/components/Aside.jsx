import { PersonalDetailsInput } from "./PersonalDetailsInput";
import { EducationInputs } from "./EducationInputs";

export function Aside({
  personalDetails,
  onChangePD,
  educations,
  onChangeED,
  currentEducation,
  onChangeSelEdId,
}) {
  return (
    <aside>
      <PersonalDetailsInput
        personalDetails={personalDetails}
        onChangePD={onChangePD}
      />
      <EducationInputs
        currentEducation={currentEducation}
        onChangeED={onChangeED}
        educations={educations}
        onChangeSelEdId={onChangeSelEdId}
      />
    </aside>
  );
}
