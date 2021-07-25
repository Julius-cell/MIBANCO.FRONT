import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { MyBankRoutingModule } from './my-bank-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { TransferComponent } from './transfer/transfer.component';
import { HistorialComponent } from './historial/historial.component';
import { ReactiveFormsModule } from '@angular/forms';



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
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
})
export class MyBankModule { }