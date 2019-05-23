import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getMatch(imageSrc: any): Observable<any> {
    console.log(imageSrc);
    return this.http.post(`http://13.93.10.255:8889/getSimilarVictim`, {path: imageSrc})
      .pipe(
        map((res) => {
          return (res);
        })
      );
  }
}
