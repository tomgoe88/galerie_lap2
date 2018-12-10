import {EventEmitter, Injectable} from '@angular/core';
import {Bild} from '../../share/bild';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  imageSelected = new EventEmitter<Bild>();
  constructor() { }
}
