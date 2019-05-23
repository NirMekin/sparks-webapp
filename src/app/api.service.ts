import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import {Http, Response} from '@angular/http';
import { Observable , of } from 'rxjs/';
import { map, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getMatch(image: String): any {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( {
          baseUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-surprise.svg',
          name: '1024px-Face-surprise.svg.png',
          similarityScore: 0.4
        });
      }, 1000);
    });
  }

  extractData(res: Response) {
    return res;
  }
}
