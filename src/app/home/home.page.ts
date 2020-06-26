import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public useWorkaround = false;

  constructor() { }

  public homeRefreshEvent(event: any) {
    console.log('refreshed home');
    event.target.complete();
  }

  public backButtonAction(event: any) {
    console.log('home back btn action');
  }

  public toggleWorkaround() {
    this.useWorkaround = !this.useWorkaround;
  }
}
