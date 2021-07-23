import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/my-bank/new']);
    this.items = [
      { label: 'Nuevo Destinatario', icon: 'pi pi-fw pi-user-plus', routerLink: ['/my-bank/new'] },
      { label: 'Transferir', icon: 'pi pi-fw pi-credit-card', routerLink: ['/my-bank/transfer'] },
      { label: 'Historial', icon: 'pi pi-fw pi-calendar', routerLink: ['/my-bank/historial'] },
    ];
  }

}
