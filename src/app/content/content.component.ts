import { Component, NgModule} from '@angular/core';
import {CommonService} from '../common.service';
import {PreviewComponent} from '../preview/preview.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(public commonService: CommonService) { }

  handleFileInput(images) {
    const reader = new FileReader();
    reader.onload = e =>  {
      this.commonService.setImageSrc(reader.result);
      this.commonService.openModal = true;
    };

    reader.readAsDataURL(images[0]);
  }

}
