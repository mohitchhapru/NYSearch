import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { UserComponent} from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  showAddUserForm: boolean;
  users:any;
  userName: String;
  firstName: String;
  lastName: String;
  password: String;

  constructor(private userService:UsersService) {
    this.showAddUserForm = false;
   }

  ngOnInit() {
    this.userService.allUsers()    
    .subscribe(res => this.users=res.json());
  }

  toggleAddUserForm(){
    console.log("toggleAddUserForm function called");        
    this.showAddUserForm = !(this.showAddUserForm);    
  }

}
