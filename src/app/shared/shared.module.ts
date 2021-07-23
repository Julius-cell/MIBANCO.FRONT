import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule
    ],
  exports: [
    NotFoundComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
