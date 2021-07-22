import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { PrimengModule } from '../primeng/primeng.module';
import { MyBankRoutingModule } from './my-bank-routing.module';
import { NewComponent } from './new/new.component';
import { SharedModule } from '../shared/shared.module';
import { TransferComponent } from './transfer/transfer.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewComponent,
    TransferComponent,
    HistorialComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MyBankRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
})
export class MyBankModule { }