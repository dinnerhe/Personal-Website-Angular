import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GeneraljwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('jwt');
    if(token){
      const r_cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });
      return next.handle(r_cloned);
    }else
    return next.handle(request);
  }
}
