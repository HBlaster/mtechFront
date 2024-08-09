import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../services/userservice.service';

@Component({
  selector: 'app-userlistcomponent',
  templateUrl: './userlistcomponent.component.html',
  styleUrls: ['./userlistcomponent.component.scss'],
})
export class UserlistcomponentComponent  implements OnInit {

  users: any[] = [];
  constructor(
    private _userService: UserserviceService
  ) { }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers(){
    this._userService.getUsers().subscribe(
      (data:any)=>{
        console.log("Data: ", data);
        this.users = data;
      }
    );
  }

}
