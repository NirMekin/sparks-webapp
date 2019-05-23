import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getMatch(imageSrc: any): any {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   resolve( {
      //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-surprise.svg/1024px-Face-surprise.svg.png',
      //     name: 'Hello World',
      //     similarityScore: 0.4
      //   });
      // }, 1000);
      this.http.post(`13.93.10.255:8889/getSimilarVictim`, {path: imageSrc})
        .pipe(
          map((res: {results}) => {
            console.log(res);
            resolve(res.results);
          })
        );
    });
  }
}
