import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoPagePage } from './pedido-page.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoPagePageRoutingModule {}
