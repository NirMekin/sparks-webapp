import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../common.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  isMatch: boolean;
  matchObj: any;
  constructor(private modalService: NgbModal, private commonService: CommonService, private apiService: ApiService) {
    this.isMatch = false;
  }

  closeModal() {
    this.commonService.openModal = false;
    this.isMatch = false;
  }
  setMatch() {
   this.apiService.getMatch(this.commonService.getImageSrc()).subscribe(res => {
     this.commonService.setMatch(res);
     console.log(res, this.commonService.getMatchObj());
     this.matchObj = this.commonService.getMatchObj();
     this.isMatch = true;
    });
  }
  getSimilarity() {
    // @ts-ignore
    let x =  parseInt(this.matchObj.similarityScore * 1000);
    return x > 100 ? x % 100 : x;
  }
}
