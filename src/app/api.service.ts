import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
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
}
