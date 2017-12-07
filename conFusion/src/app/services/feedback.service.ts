import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHttpmsgService) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.restangular.all('feedback').getList();
  }

  getFeedback(id: number): Observable<Feedback> {
    return  this.restangular.one('feedback',id).get();
  }

  submitFeedback(newFeedback: Feedback) : Observable<Feedback> {
    return this.restangular.all('feedback').post(newFeedback);
  }

}
