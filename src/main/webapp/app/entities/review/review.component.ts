import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IReview } from 'app/shared/model/review.model';
import { AccountService } from 'app/core';
import { ReviewService } from './review.service';

@Component({
    selector: 'jhi-review',
    templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit, OnDestroy {
    reviews: IReview[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected reviewService: ReviewService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.reviewService.query().subscribe(
            (res: HttpResponse<IReview[]>) => {
                this.reviews = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInReviews();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IReview) {
        return item.id;
    }

    registerChangeInReviews() {
        this.eventSubscriber = this.eventManager.subscribe('reviewListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
