import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

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

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
  ) {}

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

  async pedidoLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Gerando seu pedido...',
      spinner: 'crescent',
      duration: 1500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso!',
      message: 'Pedido realizado com sucesso!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
