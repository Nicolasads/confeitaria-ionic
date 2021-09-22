import { Produto } from './../models/produto.model';
import { Endpoints } from './../config/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(public http: HttpClient) {}

  listarProdutos() {
    return this.http.get<Produto[]>(Endpoints.produtos);
  }
}
