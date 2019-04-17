import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPeriod } from 'app/shared/model/period.model';
import { AccountService } from 'app/core';
import { PeriodService } from './period.service';

@Component({
    selector: 'jhi-period',
    templateUrl: './period.component.html'
})
export class PeriodComponent implements OnInit, OnDestroy {
    periods: IPeriod[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected periodService: PeriodService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.periodService.query().subscribe(
            (res: HttpResponse<IPeriod[]>) => {
                this.periods = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInPeriods();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPeriod) {
        return item.id;
    }

    registerChangeInPeriods() {
        this.eventSubscriber = this.eventManager.subscribe('periodListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
