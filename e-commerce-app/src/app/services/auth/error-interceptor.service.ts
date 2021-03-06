import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private authService :AuthService ,private router :Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error : HttpErrorResponse )=>{
        if([401,403].indexOf(error.status) !== -1){
          this.authService.userLogout();
        } else if(error.status === 404){
          this.router.navigate(['/notFoundResource', error.status], {
            queryParams :{
              "Error-status" : error.status
            }
          });

        }else{
          this.router.navigate(['/applicationError', error.status], {
            queryParams :{
              "Error-status" : error.status
            }
          });
        }
        const err = error.message || error.statusText;
        return throwError(err);
      })
    );
  }


}
