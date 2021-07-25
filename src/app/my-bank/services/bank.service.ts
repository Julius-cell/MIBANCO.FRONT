import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Bank } from 'src/app/shared/models/bank';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  public baseUrl: string = environment.baseUrl;

  getBanks(): Observable<Bank[]> {
    const banksUrl = 'https://bast.dev/api/banks.php';
    return this.http.get<Bank[]>(`${banksUrl}`)
    .pipe(pluck('banks'));
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}v1/user`, userData);
  }


}
