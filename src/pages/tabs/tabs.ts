import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = HomePage;
  tab4Root = ContactPage;


  constructor() {

  }
}
