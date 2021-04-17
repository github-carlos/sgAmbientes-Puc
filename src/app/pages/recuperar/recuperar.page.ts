import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  enviar(){

  }

  voltar(){
    this.nav.navigateForward('login')
  }

}
