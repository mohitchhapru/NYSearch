import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NYCopendata:any;

  constructor(private userService:UsersService) {
    this.userService.getNYCityOpenData().subscribe(res => this.NYCopendata=res.json());
  }  

  ngOnInit() {

  }

}
