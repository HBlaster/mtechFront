import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserlistcomponentComponent} from './userlistcomponent.component'

const routes: Routes = [
  {
     path: '', 
     redirectTo: 'users', 
     pathMatch: 'full' }
  ,{
    path:'users',
    component:UserlistcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistcomponentRoutingModule { }
