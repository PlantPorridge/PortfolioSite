import { BadgeGroup } from "../badge-group/badge-group.model";

export class Project {
    public title: string;
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public link: string;
    public demo: string;
    public badgeGroups: BadgeGroup[];
    public ciBadges: string[];
}