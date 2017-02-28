import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {DsService} from "../../app/ds.service";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage implements OnInit {
  value = '';
  eventsReceived = [];

  constructor(
    public navCtrl: NavController,
    public dsService: DsService
  ){}

  ngOnInit() {
    this.dsService.dsInstance.event.subscribe('test-event', (val) => {
      this.eventsReceived.push(val);
    })
  }

  handleClick() {
    console.log(this.value)
    this.dsService.dsInstance.event.emit('test-event', this.value);
  }

}
