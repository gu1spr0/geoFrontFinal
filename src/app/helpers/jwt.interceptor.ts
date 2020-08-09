import { AuthService } from './../services/auth.service';
import { ConfiguracionService } from './../services/configuracion.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private configuracion: ConfiguracionService,
        private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = localStorage.getItem('token');
        let data = request;

        if (token) {
            data = request.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(data).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 404) {
                    this.router.navigate(['/home']);
                }
                return throwError(err);
            })
        );
    }
}
