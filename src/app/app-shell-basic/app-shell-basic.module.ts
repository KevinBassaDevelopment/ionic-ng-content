import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppShellBasicComponent } from './app-shell-basic.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [AppShellBasicComponent],
  exports: [AppShellBasicComponent]
})
export class AppShellBasicModule { }
