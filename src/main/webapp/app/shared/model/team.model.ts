import { IProject } from 'app/shared/model//project.model';
import { IStudent } from 'app/shared/model//student.model';
import { ISprint } from 'app/shared/model//sprint.model';

export interface ITeam {
    id?: number;
    name?: string;
    status?: string;
    project?: IProject;
    students?: IStudent[];
    sprints?: ISprint[];
}

export class Team implements ITeam {
    constructor(
        public id?: number,
        public name?: string,
        public status?: string,
        public project?: IProject,
        public students?: IStudent[],
        public sprints?: ISprint[]
    ) {}
}
