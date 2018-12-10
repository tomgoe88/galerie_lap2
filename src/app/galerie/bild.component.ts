import {Component, Input, OnInit} from '@angular/core';
import {Bild} from '../../share/bild';
import {ServiceService} from '../Services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bild',
  templateUrl: './bild.component.html',
  styleUrls: ['./bild.component.css']
})
export class BildComponent implements OnInit {
 @Input() bild: Bild;
  constructor(private serviceService: ServiceService, private router: Router ) { }
  onBildSelect() {
    this.serviceService.imageSelected.emit(this.bild);
    this.router.navigate(['/imageDetail']);
  }
  ngOnInit() {
  }
}
