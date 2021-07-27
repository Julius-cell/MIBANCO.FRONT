import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Transfer } from 'src/app/shared/models/transfer';
import { User } from 'src/app/shared/models/user';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transferForm = this.fb.group({
    user: [''],
    amount: [0],
  });

  public users: User[] = [];
  public userSuggestions: User[] = [];
  public userSelected!: User;

  constructor(private bankService: BankService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
  }

  search(event: string) {
    this.userSuggestions = this.users.filter(user => {
      return user.name.includes(event);
    })
  }

  getUsers() {
    this.bankService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  setUserSelectedDetails(event: User) {
    this.userSelected = event;
  }

  transferAmount() {
    const transfer = this.setTransferData();
    this.bankService.createTransfer(transfer).subscribe(res => {
      console.log(res);
    }, (err: Error) => {
      console.log(err);
    })
  }

  setTransferData(): Transfer {
    const { _id, ...rest } = this.transferForm.value.user;
    const amount = this.transferForm.value.amount;
    return {
      amount,
      user: _id
    }
  }

  resetTranferForm() {
    this.transferForm.reset();
  }

}
