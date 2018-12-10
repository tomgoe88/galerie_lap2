import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  selectedFile = null;
  beschreibung: string = null;
  name: string = null;
  onUploadImage(event) {
    this.selectedFile = event.target.files[0];
  }
  onChangeDiscription(event) {
    this.beschreibung = event.target.value;
  }
  onChangeName(event) {
    this.name = event.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
