import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    TableModule
  ]
})
export class PrimengModule { }