import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {of} from 'rxjs';
import {Service} from './services/Service';

@Injectable({
  providedIn: 'root',
})
export class ConfigResolver implements Resolve<any> {
  constructor(private service: Service) {}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot) {

    console.log("Resolver called")
    if (route?.url?.length > 0) {
      const place = route.url[0].path;

      if (place && place !== `/`) {
        this.service.getConfig().pipe(
          catchError((error) => {
            console.log(error);
            return of({});
          })
        );
      } else {
        return of({});
      }
    } else {
      return of({}); //With EMPTY the pipe is not opened
    }
  }
}
