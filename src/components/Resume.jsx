import { PersonalDetailsCV } from "./PersonalDetailsCV";
import { EducationCV } from "./EducationCV";
import { WorkCV } from "./WorkCV";

export function Resume({ personalDetails, educations, works }) {
  return (
    <main>
      <PersonalDetailsCV personalDetails={personalDetails} />
      <EducationCV educations={educations} />
      <WorkCV works={works} />
    </main>
  );
}
