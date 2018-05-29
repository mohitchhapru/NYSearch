import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') 
  user: any;
  modal: String;
  userName: String;
  firstName: String;
  lastName: String;
  editUser: boolean;

  constructor(private userService:UsersService) { 
    this.editUser = false;
  }

  ngOnInit() {
  }  

  deleteUser(){
    this.userService.deleteUser(this.user.id)
    .subscribe(res=>this.user=null);
  };

  UpdateUser(){        
    this.userService.updateUser(this.user.id, this.user.firstName, this.user.lastName, this.user.userName, this.user.password).subscribe(res=>{
      this.user.userName=res.json().userName;
      this.user.firstName=res.json().firstName;
      this.user.lastName=res.json().lastName;
      this.user.password = res.json().password;
      this.editUser = false;
    })   
  }
  
  toggleUserEditForm(){
    this.editUser = !(this.editUser);
  }
}
