import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private imageSrc: any;
  public openModal: boolean;
  constructor() {
    this.imageSrc = '';
    this.openModal = false;
  }
  getImageSrc(): any {
    return this.imageSrc;
  }

  setImageSrc(imageSrc: any) {
    this.imageSrc = imageSrc;
  }
}
