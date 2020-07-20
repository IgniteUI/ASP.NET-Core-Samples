import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {

  constructor(@Inject('BASE_URL') private endPoint: string, private http: HttpClient) {
    this.financialRecords = new BehaviorSubject([]);
   }
  public financialRecords: BehaviorSubject<any[]>;

  public getFinancialRecords(amount: number) {
    return this.http.get(this.endPoint + "financialData/" + amount).pipe(map((data: any[]) => {
      data.map(record => {
        const diffs = record["PriceDiffs"];
        Object.assign(record, diffs);
        delete record["PriceDiffs"];
      });

      return data;
    })).subscribe((data: any[]) => {
        this.financialRecords.next(data);
    });
  }
}