import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onLoginOk: boolean;
  onShowOk: boolean;
  constructor(private router: Router) {
    this.onLoginOk = true;
    this.onShowOk = false;
  }
  onClick() {
    this.router.navigate(['/login']); // morgen noch einmal anschauen
  }
  onShow() {
    this.onShowOk = !this.onShowOk;
  }

  ngOnInit() {
  }

}
