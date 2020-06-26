import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-shell-basic',
  templateUrl: './app-shell-basic.component.html',
  styleUrls: ['./app-shell-basic.component.scss']
})
export class AppShellBasicComponent implements OnInit {

  @Input() showBackBtn = true;

  @Output() public customRefreshEvent: EventEmitter<any> = new EventEmitter();
  @Output() public backBtnClick: EventEmitter<void> = new EventEmitter();
  @Output() public customEvent: EventEmitter<void> = new EventEmitter();


  constructor(
  ) {
  }

  ngOnInit() {
  }

  public doRefresh(event: any) {
    this.customRefreshEvent.next(event);
  }

  public backButtonAction() {
    this.backBtnClick.next();
  }

  public customAction() {
    this.customEvent.next();
  }

}
