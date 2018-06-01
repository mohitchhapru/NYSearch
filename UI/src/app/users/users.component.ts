import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { UserComponent} from '../user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  showAddUserForm: boolean;
  users:any;
  userName: String;
  loginUserName: String;
  firstName: String;
  lastName: String;
  password: String;
  loginPassword: String;
  userfound: boolean;
  showWrongCredentialMessage: boolean;
  showAllUsers: boolean;

  constructor(private userService:UsersService, public router: Router) {
    this.showAddUserForm = false;
    this.showAllUsers = false;
   }

  ngOnInit() {
    this.userService.allUsers()    
    .subscribe(res => this.users=res.json());
  }

  toggleAddUserForm(){
    console.log("toggleAddUserForm function called");        
    this.showAddUserForm = !(this.showAddUserForm);    
  }

  addNewUser(){
    // console.log("Adding : "+this.userName+this.firstName+this.lastName);     
    this.userService.addUser(this.firstName, this.lastName, this.userName, this.password).subscribe(res=>{
      this.users.push(res.json());
      this.userName="";
      this.firstName="";
      this.lastName="";
      this.password="";
      this.showAddUserForm = false;
    })
  }

  login(){
    // console.log("UserName: " + this.loginUserName + " Pass: " + this.loginPassword);    
    this.userfound = false;
    this.users.forEach(element => {
      if(this.loginUserName == element.userName && this.loginPassword == element.password){         
        this.userfound = true;
      }      
    });

    if(this.userfound && true){
      // alert ("user present");
      this.showWrongCredentialMessage = false;

      // navigate to search    
      this.router.navigate(['./nysearch']);
    }
    else{
      this.showWrongCredentialMessage = true;
    }

  }

  displayLoginSection(){
    this.showAllUsers = false;
  }

  displayAllUsersSection(){
    this.showAllUsers = true;
  }

}
