import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export const HEROKU_APP = 'https://holocaustwin.herokuapp.com/getSimilarVictim'; //POST
export const HEROKU_APP_HEALTH_CHECK = 'https://holocaustwin.herokuapp.com/healthCheck'; //GET
export const GOOGLE_APP = 'https://myholocausttwin.ew.r.appspot.com/getSimilarVictim'; //POST
export const GOOGLE_APP_HEALTH_CHECK = 'https://myholocausttwin.ew.r.appspot.com/healthCheck'; //GET

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  getMatch(imageSrc: any): Observable<any> {
    return this.http.post(HEROKU_APP, {path: imageSrc})
      .pipe(
        map((res) => {
          return (res);
        }));
  }

  healthCheck() {
    return this.http.get(HEROKU_APP_HEALTH_CHECK);
  }
}
