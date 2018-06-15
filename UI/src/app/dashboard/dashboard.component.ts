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
  edited: any;
  displayData: any;
  ContactInformation: any;

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

  displayDetails(Req_id){
    if(this.NYCopendata!=undefined){
      this.NYCopendata.forEach(element => {
        if (element['request_id'] == Req_id) {
          this.displayData = element;  
        }  
      });      
    }    
    var tempArr = {}
    if (this.displayData['additional_description_1']) {
      var x = this.displayData['additional_description_1'];    
      x = x.split(";")
      for (var k in x) {
        var val = x[k].split(":");
        val[0] = val[0].replace(/ /g, "_").toLowerCase();
        tempArr[val[0]] = val[1]
      }
      console.log(tempArr)
    }
    this.ContactInformation = [tempArr];
    this.edited = true;
    debugger;
  }
}
