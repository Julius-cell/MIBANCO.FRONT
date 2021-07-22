import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nuevo Destinatario', icon: 'pi pi-fw pi-user-plus', routerLink: ['/new'] },
      { label: 'Transferir', icon: 'pi pi-fw pi-credit-card', routerLink: ['/transfer'] },
      { label: 'Historial', icon: 'pi pi-fw pi-calendar', routerLink: ['/historial'] },
    ];
  }

}
