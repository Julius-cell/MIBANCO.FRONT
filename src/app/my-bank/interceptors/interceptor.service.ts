import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    const error = err.error;
    Swal.fire({
      title: 'Error!',
      text: `The request has been failed, try later.`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return throwError(err.error);
  }

}
