import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public cols: any[] = [
    { label: 'Destinatario', field: 'name', width: 'width:20%' },
    { label: 'RUT', field: 'rut', width: 'width:20%' },
    { label: 'Banco', field: 'bank', width: 'width:15%' },
    { label: 'Tipo de cuenta', field: 'account', width: 'width:20%' },
    { label: 'Monto', field: 'amount', width: 'width:15%' }
  ];

  public transfers: any[] = [];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getTransfers();
  }

  getTransfers() {
    this.bankService.getTransfers().subscribe(res => {
      this.transfers = res;
    }, (err: Error) => {
      console.warn(err);
    });
  }

}
