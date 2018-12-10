import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalerieComponent } from './galerie/galerie.component';
import {BilderService} from './Services/bilder.service';
import { BildComponent } from './galerie/bild.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { NavbarDirective } from './navbar.directive';
import {ServiceService} from './Services/service.service';
import { BildDetailComponent } from './galerie/bild-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalerieComponent,
    BildComponent,
    LoginComponent,
    ImageUploadComponent,
    NavbarDirective,
    BildDetailComponent,

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [BilderService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
