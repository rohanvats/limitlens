import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return this.authService.getAuthData$.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     // console.log('user...', user);
    //     if (!user?.uuid && !user?.jwt) {
    //       const newReq = req.clone({
    //         setHeaders: {
    //           'App-Token': `Bearer ${environment.token}`,
    //         },
    //       });
    //       return next.handle(newReq);
    //     }
    //     const authReq = req.clone({
    //       setHeaders: {
    //         'App-Token': `Bearer ${environment.token}`,
    //         Authorization: `Bearer ${user.jwt}`,
    //       },
    //     });
    //     return next.handle(authReq);
    //   })
    // );

    return this.authService.getAuthData$.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user?.uuid && !user?.jwt) {
          const newReq = req.clone({
            setHeaders: {
              'App-Token': `Bearer ${environment.token}`,
            },
          });
          return next.handle(newReq);
        }
        const authReq = req.clone({
          setHeaders: {
            'App-Token': `Bearer ${environment.token}`,
            Authorization: `Bearer ${user.jwt}`,
          },
        });
        return next.handle(authReq);
      })
    );
  }
}
