import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import {UserlistcomponentComponent} from './userlistcomponent.component';

import { UserlistcomponentRoutingModule } from './userlistcomponent-routing.module';


@NgModule({
  declarations: [
    UserlistcomponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    UserlistcomponentRoutingModule
  ]
})
export class UserlistcomponentModule { }
