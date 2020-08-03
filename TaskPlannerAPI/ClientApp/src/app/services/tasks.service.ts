import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { TASKS_DATA } from './tasksData';
import { ITask } from '../interfaces';

// base URL for the API Server
const BASE_URL = 'https://localhost:44327/';

@Injectable()
export class TasksDataService {

  constructor(private _http: HttpClient) {
  }

    public getAllIssues(): any {

      return this._http.get(`${BASE_URL}getAllIssues`);
        // .pipe(
        //   map(data => data.map(rec => this.parseDates(rec))),
        //   map(data => this.flattenResponseData(data, fields)),
        //   catchError(this.handleError)
        // );
    }

    public getAssignedTasks(): Observable<ITask[]> {
        return of(TASKS_DATA.filter(rec => rec.owner.id).map(rec => this.parseDate(rec)));
    }

    public getUnassignedTasks(): Observable<ITask[]> {
        return of(TASKS_DATA.filter(rec => !rec.owner.id).map(rec => this.parseDate(rec)));
    }

    private parseDate(obj) {
        const record = {};

        obj.started_on = obj.started_on ? new Date(obj.started_on) : null;
        obj.deadline = obj.deadline ? new Date(obj.deadline) : null;
        return obj;
    }
}
