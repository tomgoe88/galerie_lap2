import { Component, OnInit } from '@angular/core';
import {Bild} from '../../share/bild';
import {BilderService} from '../Services/bilder.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  public bilder: Bild[];
  constructor(private bS: BilderService) { }

  ngOnInit() {
    this.bilder = this.bS.bilder;
  }

}
