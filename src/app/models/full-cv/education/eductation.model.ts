import { EducationLevelAndResults } from "./education-level-and-results.model";

export class Education {
    public school: string;
    public startDate: Date;
    public endDate: Date;
    public levelAndResults: EducationLevelAndResults[];
    public note: string;
  }