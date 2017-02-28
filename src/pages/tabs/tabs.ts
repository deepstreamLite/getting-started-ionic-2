import { Component } from '@angular/core';

import { RecordPage } from '../record/record';
import { EventsPage } from '../events/events';
import { RPCPage } from '../rpc/rpc';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  recordTab: any = RecordPage;
  eventsTab: any = EventsPage;
  rpcTab: any = RPCPage;

  constructor() {

  }
}
