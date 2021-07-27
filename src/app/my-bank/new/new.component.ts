import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    rut: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [, Validators.required],
    bank: [, Validators.required],
    account: ['', Validators.required],
    numberAccount: [, Validators.required],
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
    const bankName = this.userForm.controls.bank.value.name;
    this.userForm.value.bank = bankName;
    return this.userForm.value;
  }

  cleanForm() {
    this.userForm.reset();
  }

  checkInvalidField(field: string) {
    return this.userForm.controls[field].touched && this.userForm.controls[field].invalid;
  }

  validateForm(): boolean {
    return this.userForm.invalid;
  }

}
