import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(  private injector :Injector) { }

  // Interceptor are not dependable class so we need to use injector to hold the required dependencies ..

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authService = this.injector.get(AuthService);
    const tokenReq = req.clone({
      setHeaders :{
        Authorization : `Bearer ${authService.getToken()}`,
      }
    });
    return next.handle(tokenReq);
  }
}
