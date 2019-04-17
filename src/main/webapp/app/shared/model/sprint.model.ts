import { Moment } from 'moment';
import { ITeam } from 'app/shared/model//team.model';
import { IStory } from 'app/shared/model//story.model';

export interface ISprint {
    id?: number;
    name?: string;
    endDate?: Moment;
    startDate?: Moment;
    status?: string;
    team?: ITeam;
    stories?: IStory[];
}

export class Sprint implements ISprint {
    constructor(
        public id?: number,
        public name?: string,
        public endDate?: Moment,
        public startDate?: Moment,
        public status?: string,
        public team?: ITeam,
        public stories?: IStory[]
    ) {}
}
