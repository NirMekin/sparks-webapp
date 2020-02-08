import {Component} from '@angular/core';
import {CommonService} from '../common.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  isMatch: boolean;
  loading = false;
  matchObj: { matchSrc: string, similarityScore: number, matchName: string };

  constructor(private commonService: CommonService, private apiService: ApiService) {
    this.isMatch = false;
  }

  closeModal() {
    this.commonService.openModal = false;
    this.isMatch = false;
  }

  setMatch() {
    this.loading = true;
    this.apiService.getMatch(this.commonService.getImageSrc())
      .subscribe(res => {
        this.commonService.setMatch(res);
        this.matchObj = this.commonService.getMatchObj();
        this.isMatch = true;
        this.loading = false;
      });
  }

  get similarity() {
    const score = this.matchObj.similarityScore * 100;
    return score > 100 ? 98 : score;
  }
}
