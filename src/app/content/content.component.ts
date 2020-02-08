import {Component} from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  isCameraOpen = false;
  constructor(public commonService: CommonService) { }

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
