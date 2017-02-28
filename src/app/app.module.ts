import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { RPCPage } from '../pages/rpc/rpc';
import { RecordPage } from '../pages/record/record';
import { TabsPage } from '../pages/tabs/tabs';
import {DsService} from "./ds.service";

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    RPCPage,
    RecordPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    RPCPage,
    RecordPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DsService
    ]
})
export class AppModule {}
