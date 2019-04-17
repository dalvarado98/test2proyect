import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestPeriodModule } from './period/period.module';
import { TestProjectModule } from './project/project.module';
import { TestTeamModule } from './team/team.module';
import { TestSprintModule } from './sprint/sprint.module';
import { TestStudentModule } from './student/student.module';
import { TestStoryModule } from './story/story.module';
import { TestReviewModule } from './review/review.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TestPeriodModule,
        TestProjectModule,
        TestTeamModule,
        TestSprintModule,
        TestStudentModule,
        TestStoryModule,
        TestReviewModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestEntityModule {}
