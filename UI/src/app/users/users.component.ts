import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  showAddUserForm: boolean;

  constructor() {
    this.showAddUserForm = false;
   }

  ngOnInit() {
  }

  toggleAddUserForm(){
    console.log("toggleAddUserForm function called");        
    this.showAddUserForm = !(this.showAddUserForm);    
  }

}
