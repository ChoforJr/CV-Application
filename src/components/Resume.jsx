import { PersonalDetailsCV } from "./PersonalDetailsCV";
import { EducationCV } from "./EducationCV";
import { WorksCV } from "./WorksCV";
import "../syles/Resume.css";

export function Resume({ personalDetails, educations, works }) {
  return (
    <main>
      <PersonalDetailsCV personalDetails={personalDetails} />
      <EducationCV educations={educations} />
      <WorksCV works={works} />
    </main>
  );
}
