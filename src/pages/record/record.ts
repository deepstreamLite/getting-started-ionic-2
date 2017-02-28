import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DsService } from '../../app/ds.service'

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage implements OnInit {

  firstname;
  lastname;
  record;

  constructor(
    public navCtrl: NavController,
    public dsService: DsService
  ) {}

  ngOnInit() {
    this.record = this.dsService.dsInstance.record.getRecord('test/johndoe')
    this.record.subscribe((val) => {
      this.firstname = val.firstname;
      this.lastname = val.lastname;
    })
  }

  handleFnameChange(val){
    this.record.set('firstname', val);
  }
  handleLnameChange(val) {
    this.record.set('lastname', val);
  }

}
