import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { ProdutosService } from 'src/services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {
  produto: Produto[];

  constructor(private service: ProdutosService, private router: Router) {}

  ngOnInit() {
    this.produtos();
  }

  produtos() {
    this.service.listarProdutos().subscribe((produto) => {
      this.produto = produto;

      console.log(produto);
    });
  }

  navigate() {
    this.router.navigate(['/pedido-page']);
  }
}
