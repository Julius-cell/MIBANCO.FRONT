import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'historial', component: HistorialComponent },
      { path: '**', redirectTo: 'new' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBankRoutingModule { }
