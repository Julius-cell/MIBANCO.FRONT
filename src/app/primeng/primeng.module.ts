import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  exports: [
    ButtonModule,
    TabMenuModule,
  ]
})
export class PrimengModule { }