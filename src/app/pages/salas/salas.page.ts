import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navegar(){
    this.nav.navigateForward('')
  }

  cadastrar(){
    
  }

}
