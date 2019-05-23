import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private imageSrc: any;
  private matchObject: any;
  public openModal: boolean;
  public isSetMatch: boolean;
  constructor() {
    this.imageSrc = '';
    this.openModal = false;
    this.isSetMatch = false;
  }
  getImageSrc(): any {
    return this.imageSrc;
  }

  setImageSrc(imageSrc: any) {
    this.imageSrc = imageSrc;
  }
  setMatch(matchObj: any) {
    this.matchObject = {
      userSrc : this.imageSrc,
      matchSrc : matchObj.baseUrl + '/' + matchObj.name + '.jpg',
      matchName: matchObj.name,
      similarityScore : matchObj.similarityScore
    };
    this.isSetMatch = true;
  }
  getMatchObj() {
    return this.matchObject;
  }
}
