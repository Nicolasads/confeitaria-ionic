import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoPagePageRoutingModule } from './pedido-page-routing.module';

import { PedidoPagePage } from './pedido-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoPagePageRoutingModule
  ],
  declarations: [PedidoPagePage]
})
export class PedidoPagePageModule {}
