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
  async setMatch() {
    const response = await this.apiService.getMatch(this.commonService.getImageSrc());
    this.commonService.setMatch(response);
    console.log(response, this.commonService.getMtachObj());
    this.matchObj = this.commonService.getMtachObj();
    this.isMatch = true;
  }
}
