import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageSrc: any;
  constructor() { }

  ngOnInit() {
  }

  handleFileInput(images) {
    const reader = new FileReader();
    reader.onload = e =>  this.imageSrc = reader.result;

    reader.readAsDataURL(images[0]);
  }

}
