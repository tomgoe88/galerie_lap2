import { Routes, RouterModule } from '@angular/router';
import {GalerieComponent} from './galerie/galerie.component';
import {LoginComponent} from './login/login.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {BildDetailComponent} from './galerie/bild-detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: GalerieComponent },
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: ImageUploadComponent},
  {path: 'imageDetail', component: BildDetailComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
