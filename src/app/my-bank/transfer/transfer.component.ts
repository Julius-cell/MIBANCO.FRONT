import { Component, OnInit } from '@angular/core';
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
  
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  search(event: string) {
    console.log(event);
    console.log(this.users);
    this.userSuggestions = this.users.filter(user => {
      return user.name.includes(event);
    })
  }
  
  getUsers() {
    this.bankService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

}
