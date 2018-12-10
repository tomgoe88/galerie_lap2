import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }

}

