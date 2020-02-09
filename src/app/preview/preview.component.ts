import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonService} from '../common.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  isMatch: boolean;
  loading = false;
  matchObj: { matchSrc: string, similarityScore: number, matchName: string, nameSearch: string };
  isMobile: any;
  isTablet: boolean;
  noMatch: boolean
  @Output() error = new EventEmitter();

  constructor(private commonService: CommonService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.isMatch = false;
    this.isMobile = this.commonService.isMobile();
    this.isTablet = this.commonService.isTabletDevice();
  }

  closeModal() {
    this.commonService.openModal = false;
    this.isMatch = false;
  }

  startProcess() {
    this.loading = true;
    this.apiService.getMatch(this.commonService.getImageSrc())
      .subscribe(res => {
        this.commonService.setMatch(res);
        this.matchObj = this.commonService.getMatchObj();
        this.isMatch = true;
        this.loading = false;

        if (this.matchObj.matchName === 'No Match Found') {
          this.noMatch = true;
        }
      },
        (err) => {
        this.error.emit();
        });
  }

  get similarity() {
    const score = this.matchObj.similarityScore * 100;
    return score > 95 ? 95 : score;
  }
}
