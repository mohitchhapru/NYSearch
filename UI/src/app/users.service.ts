import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {
    constructor(private http:Http) { }

    allUsers(){
        return this.http.get('/users/');
    }

    addUser(firstName, lastName, userName, password){
      console.log("Adding : "+userName+firstName+lastName);
      return this.http.post('/users/',{          
          "firstName":firstName,
          "lastName":lastName,
          "userName": userName,
          "password": password
        })
      }
    
      deleteUser(id){
        console.log("Deleting user id "+id);
        return this.http.delete(`/users/${id}`);
      }
    
      updateUser(id,firstName, lastName, userName, password){
        console.log("Updating : "+userName+firstName+lastName);
        return this.http.patch(`/users/${id}`,{          
          "firstName":firstName,
          "lastName":lastName,
          "userName": userName,
          "password": password
        })
      }
}