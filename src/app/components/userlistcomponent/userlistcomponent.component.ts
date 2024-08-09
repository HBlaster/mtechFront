import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../services/userservice.service';
import {User} from './model/users.response';

@Component({
  selector: 'app-userlistcomponent',
  templateUrl: './userlistcomponent.component.html',
  styleUrls: ['./userlistcomponent.component.scss'],
})
export class UserlistcomponentComponent  implements OnInit {

  users: User[] = [];
  constructor(
    private _userService: UserserviceService
  ) { }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers(){
    this._userService.getUsers().subscribe(
      (data)=>{
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

}
