import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public NYCopendata:any;
  searchword: String;
  edited: any; // to ask

  constructor(private userService:UsersService) {
    // this.userService.getNYCityOpenData().subscribe(res => this.NYCopendata=res.json());
  }  

  ngOnInit() {
    this.userService.getNYCityOpenData().toPromise()
    .then(res => this.NYCopendata=res.json());    
      this.edited = false
  }

  filter_search(searchword){
    var view_box=[];
    if(this.NYCopendata!=undefined){
      this.NYCopendata.forEach(element => {        
        if(searchword !=undefined){
          if(element['agency_name'].toLowerCase().search(searchword.toLowerCase())>=0){
            view_box.push(element);
          }
        }
      });
     }    
    return view_box;
  }
}
