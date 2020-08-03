import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { TASKS_DATA, GITHUB_TASKS } from './tasksData';
import { ITask } from '../interfaces';

// base URL for the API Server
const BASE_URL = 'https://localhost:44327/';

@Injectable()
export class TasksDataService {

  constructor(private _http: HttpClient) {
  }

    public getAllIssues(): any {
      return of(GITHUB_TASKS.map(rec => this.parseDate(rec)));
      // return this._http.get(`${BASE_URL}getAllIssues`);
        // .pipe(
        //   map(data => data.map(rec => this.parseDates(rec))),
        //   map(data => this.flattenResponseData(data, fields)),
        //   catchError(this.handleError)
        // );
    }

    public getAssignedTasks(): Observable<ITask[]> {
        return of(TASKS_DATA.filter(rec => rec.assignee.id).map(rec => this.parseDate(rec)));
    }

    public getUnassignedTasks(): Observable<ITask[]> {
        return of(TASKS_DATA.filter(rec => !rec.assignee.id).map(rec => this.parseDate(rec)));
    }

    private parseDate(obj) {
        obj.createdAt = obj.createdAt ? new Date(obj.createdAt) : null;
        obj.updatedAt = obj.updatedAt ? new Date(obj.updatedAt) : null;
        return obj;
    }
}
