import { Injectable } from '@angular/core';
import {Bild} from '../../share/bild';

@Injectable({
  providedIn: 'root'
})
export class BilderService {
  bilder: Bild[] = [];
  constructor() {
    this.bilder.push(
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg'),
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg'),
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg'),
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg'),
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg'),
      new Bild('Testbild', 'Es ist ein schönes Bild', 'https://www.play3.de/wp-content/uploads/2018/05/Tekken-7-Bild-2.jpg')
    );
  }
}
