import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageSrc: String;
  constructor() { }

  ngOnInit() {
  }

  handleFileInput(img) {
    const reader = new FileReader();
    reader.onload = e =>  this.imageSrc = reader.result;

    reader.readAsDataURL(img[0]);
  }

}
