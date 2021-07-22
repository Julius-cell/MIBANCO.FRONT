import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { PrimengModule } from '../primeng/primeng.module';
import { MyBankRoutingModule } from './my-bank-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MyBankRoutingModule
  ],
  exports: [
    HomeComponent
  ],
})
export class MyBankModule { }
