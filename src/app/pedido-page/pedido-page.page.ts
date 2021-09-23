import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

interface Pedido {
  nomePedido: string;
}

@Component({
  selector: 'app-pedido-page',
  templateUrl: './pedido-page.page.html',
  styleUrls: ['./pedido-page.page.scss'],
})
export class PedidoPagePage implements OnInit {
  pedido: Pedido = {
    nomePedido: 'Bolo de Cenoura',
  };

  constructor(public loadingController: LoadingController) {}

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Carregando...',
      spinner: 'crescent',
      duration: 1500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
