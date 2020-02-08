import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  isCameraOpen = false;
  isMobile: boolean;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.isMobile = this.commonService.isMobile();
  }

  get openModal() {
    return this.commonService.openModal;
  }

  handleFileInput(images) {
    const reader = new FileReader();
    reader.onload = e =>  {
      this.commonService.setImageSrc(reader.result);
      this.commonService.openModal = true;
    };

    reader.readAsDataURL(images[0]);
  }

  updateUploadVisible(event) {
    this.isCameraOpen = event;
  }

}
