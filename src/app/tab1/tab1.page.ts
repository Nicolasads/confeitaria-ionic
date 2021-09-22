import { Produto } from './../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
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
    this.router.navigate(['/produto-detalhes']);
  }
}
