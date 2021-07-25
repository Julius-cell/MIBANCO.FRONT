import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bank } from 'src/app/shared/models/bank';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public userForm = this.fb.group({
    rut: [''],
    name: [''],
    mail: [''],
    phone: [''],
    bank: [],
    account: [''],
    numberAccount: [''],
  });

  public banks: Bank[] = [];

  constructor(private bankService: BankService,
              private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.loadBanks();
  }

  loadBanks() {
    this.bankService.getBanks().subscribe(res => {
      this.banks = res;
    }, (err: Error) => {
      console.log(err.message);
    });
  }

}
