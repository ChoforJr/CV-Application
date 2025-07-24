import { PersonalDetailsInput } from "./PersonalDetailsInput";
import { EducationInputs } from "./EducationInputs";

export function Aside({ personalDetails, onChangePD, educations, onChangeED }) {
  return (
    <aside>
      <PersonalDetailsInput
        personalDetails={personalDetails}
        onChangePD={onChangePD}
      />
      <EducationInputs educations={educations} onChangeED={onChangeED} />
    </aside>
  );
}
