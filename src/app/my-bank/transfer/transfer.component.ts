import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/shared/models/transfer';
import { User } from 'src/app/shared/models/user';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public users: User[] = [];
  public userSuggestions: User[] = [];
  public userSelected!: User;

  constructor(private bankService: BankService) { }

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
    console.log(this.userSelected);
  }

  transferAmount(amount: number) {
    const transfer = this.setTransferData(amount);
    this.bankService.createTransfer(transfer).subscribe(res => {
      console.log(res);
    }, (err: Error) => {
      console.log(err);
    })
  }

  setTransferData(amount: number): Transfer {
    const userId = this.userSelected._id!;
    return {
      amount,
      user: userId
    }
  }

}
