import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bank } from 'src/app/shared/models/bank';
import { User } from 'src/app/shared/models/user';
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
    email: [''],
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

  createUser() {
    const user = this.getUserFormData();
    this.bankService.createUser(user).subscribe(res => {
     console.log(res);
    }, (err: Error) => {
      console.log(err);
    });
  }

  getUserFormData(): User {
    return this.userForm.value;
  }

}
