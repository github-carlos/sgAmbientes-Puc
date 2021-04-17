import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Salas', url: 'salas', icon: 'book' },
    { title: 'Embarcados', url: 'embarcados', icon: 'hardware-chip'},
  ];
  public labels = [
    {title: 'Telefone', icon: 'call-outline'},
  ];
  constructor() {}
}
