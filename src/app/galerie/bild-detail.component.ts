import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../Services/service.service';
import {Bild} from '../../share/bild';

@Component({
  selector: 'app-bild-detail',
  templateUrl: './bild-detail.component.html',
  styleUrls: ['./bild-detail.component.css']
})
export class BildDetailComponent implements OnInit {
  selectedImage: Bild;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.imageSelected.subscribe(
      (bild: Bild) => this.selectedImage = bild
    );
    }

}
