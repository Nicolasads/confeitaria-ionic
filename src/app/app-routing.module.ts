import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'produto-detalhes',
    loadChildren: () => import('./produto-detalhes/produto-detalhes.module').then( m => m.ProdutoDetalhesPageModule)
  },
  {
    path: 'pedido-page',
    loadChildren: () => import('./pedido-page/pedido-page.module').then( m => m.PedidoPagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
