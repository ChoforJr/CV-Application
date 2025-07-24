import { PersonalDetailsCV } from "./PersonalDetailsCV";
import { EducationCV } from "./EducationCV";

export function Resume({ personalDetails, educations }) {
  return (
    <main>
      <PersonalDetailsCV personalDetails={personalDetails} />
      <EducationCV educations={educations} />
    </main>
  );
}
