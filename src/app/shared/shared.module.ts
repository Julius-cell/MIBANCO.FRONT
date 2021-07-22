import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
