import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/shared/models/bank';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  public baseUrl: string = environment.baseUrl;

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(`${this.baseUrl}/banks`);
  }
}
