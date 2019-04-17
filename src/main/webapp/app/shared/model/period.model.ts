import { Moment } from 'moment';
import { IProject } from 'app/shared/model//project.model';

export interface IPeriod {
    id?: number;
    startDate?: Moment;
    endDate?: Moment;
    name?: string;
    projects?: IProject[];
}

export class Period implements IPeriod {
    constructor(
        public id?: number,
        public startDate?: Moment,
        public endDate?: Moment,
        public name?: string,
        public projects?: IProject[]
    ) {}
}
