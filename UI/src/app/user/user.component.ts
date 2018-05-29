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

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }  

  deleteUser(){
    this.userService.deleteUser(this.user.id)
    .subscribe(res=>this.user=null);
  };
  
}
