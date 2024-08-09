import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _router:Router) {}

  goToUsrList(){
    console.log("go to usr list working")
    this._router.navigate(['user-list']);
  }
}
