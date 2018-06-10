import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @ViewChild(Content) content: Content;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  count:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['icon-megaphone', 'icon-calendar', 'icon-calendar2', 'icon-back', 'icon-calenda', 'paper-plane',
    'icon-megaphone', 'icon-megaphone', 'icon-calendar', 'build'];
    this.items=[];
    for (let i=1 ; i <= 15 ; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 16; i <= 30; i++) {
          this.items.push({
            title: 'Item ' + i,
            note: 'This is item #' + i,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          }); 
        }
        this.count=+1; 
        
        //if got 90 items it will stop the scrolling 
        if(this.count>2){
          infiniteScroll.enable(false);
          console.log("annulation")
        }
        console.log('Async operation has ended');
        resolve(); 
      }, 500);
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  //fonction pour actualiser la page courante 
  doRefresh(refresher) {
    console.log('debut async operation', refresher);

    setTimeout(() => {
      console.log('fin Async operation');
      refresher.complete();
    }, 2000);
  }

  
}
