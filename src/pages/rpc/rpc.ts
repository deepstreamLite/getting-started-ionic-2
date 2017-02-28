import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {DsService} from "../../app/ds.service";

@Component({
  selector: 'page-rpc',
  templateUrl: 'rpc.html'
})
export class RPCPage implements OnInit{

  requestValue = '3';
  responseValue = '7';
  displayResponse = '-';

  constructor(
    public navCtrl: NavController,
    public dsService: DsService
  ){}

  handleClick() {
    var data = {
      value: parseFloat(this.requestValue)
    };
    this.dsService.dsInstance.rpc.make( 'multiply-number', data, ( err, resp ) => {

      //display the response (or an error)
      this.displayResponse = resp || err.toString();
    });
  }

  ngOnInit() {
    this.dsService.dsInstance.rpc.provide( 'multiply-number', ( data, response ) => {
      // respond to the request by multiplying the incoming number
      // with the one from the response input
      response.send( data.value * parseFloat(this.responseValue) );
    })
  }

}
