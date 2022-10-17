import { Injectable } from '@angular/core';
import { EasyHttpService } from '@nge/easy-http';

import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CommonService {
  constructor(private httpService: EasyHttpService) {}

  getUserDetail() {
    const url = 'http://localhost:3000/users/';
    return this.httpService.get(url).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
