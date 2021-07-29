import { Component } from '@angular/core';

@Component({
  selector: 'tabs-screen',
  templateUrl: './tabs.screen.html',
  styleUrls: ['./tabs.screen.less']
})
export default class TabsScreen {
  contentStyle = { 'background-color': '#fff' };
  tabPanelList = [{
    label: 'Passenger List', value: 'passengerList'
  }, {
    label: 'Passenger contact', value: 'contact'
  }, {
    label: 'Travel document', value: 'travelDocument'
  }, {
    label: 'Special service', value: 'specialService'
  }, {
    label: 'Fare information', icon: 'fui-icon-tool-tip grey'
  }];
}
