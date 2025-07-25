import { PersonalDetailsCV } from "./PersonalDetailsCV";
import { EducationCV } from "./EducationCV";
import { WorksCV } from "./WorksCV";

export function Resume({ personalDetails, educations, works }) {
  return (
    <main>
      <PersonalDetailsCV personalDetails={personalDetails} />
      <EducationCV educations={educations} />
      <WorksCV works={works} />
    </main>
  );
}
