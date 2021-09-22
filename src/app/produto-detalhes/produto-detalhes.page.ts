import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { ProdutosService } from 'src/services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {
  produto: Produto[];

  constructor(private service: ProdutosService) {}

  ngOnInit() {
    this.produtos();
  }

  produtos() {
    this.service.listarProdutos().subscribe((produto) => {
      this.produto = produto;

      console.log(produto);
    });
  }
}
