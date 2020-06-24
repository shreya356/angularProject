import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{LoginComponent} from './login/login.component';
import{HomeComponent} from './home/home.component';
import{PhotosComponent} from './photos/photos.component';
import{BlogComponent} from './blog/blog.component';
import { combineLatest } from 'rxjs';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomeComponent},
  {path:'blog', component: BlogComponent},
  {path:'photo',component: PhotosComponent},
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
