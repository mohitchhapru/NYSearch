import { Component, OnInit,Input } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
import { debug } from 'util';
import { BuiltinVar } from '@angular/compiler';

@Pipe({name: 'keys'})
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {

  @Input('eventdata')
  eventdata: any; 

  constructor() {
  }

  ngOnInit() {
    for (const prop in this.eventdata) {
      if (this.eventdata.hasOwnProperty(prop)) {
        console.log(`key : ${prop}, value :${this.eventdata[prop]}`);        
      }
    }
    debugger;
  }
}
