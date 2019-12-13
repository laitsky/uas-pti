import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs/";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError } from 'rxjs/operators';
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
    constructor(private router: Router) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept provider')
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });

        return next.handle(request).pipe(
            catchError(err => {
                console.log(err);
                if(err instanceof HttpErrorResponse) {
                    console.log(err.status);
                    console.log(err.statusText);
                    if(err.status === 401){
                        window.location.href = "/login";
                    }
                }
                return Observable.throw(err);
            }) as any
        )
    }
}