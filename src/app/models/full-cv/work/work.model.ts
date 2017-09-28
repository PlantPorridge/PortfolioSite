import { BadgeGroup } from "../../badge-group/badge-group.model";

export class Work {
    public company: string;
    public startDate: Date;
    public endDate: Date;
    public jobTitle: string;
    public jobDescription: string;

    public badgeGroups: BadgeGroup[];
  }