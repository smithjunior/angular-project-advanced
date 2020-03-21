import { Produto } from './../models/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[];

  constructor() { 
    this.produtos = [
      {
        id: 1,
        nome: "mouse Microsoft",
        valor: 15.90,
        ativo: false,
        imagem: "mouse.jpg"
      },
      {
        id: 2,
        nome: "Teclado Microsoft",
        valor: 30.00,
        ativo: false,
        imagem: "teclado.jpg"
      },
      {
        id: 3,
        nome: "Monitor Samsung",
        valor: 250.00,
        ativo: false,
        imagem: "monitor.jpg"
      },
      {
        id: 4,
        nome: "Laptop Asus",
        valor: 3000.00,
        ativo: true,
        imagem: "laptop.jpg"
      },
      {
        id: 5,
        nome: "Headset Microsoft",
        valor: 10.50,
        ativo: false,
        imagem: "headset.jpg"
      },
      {
        id: 6,
        nome: "Webcam Logitech",
        valor: 90.00,
        ativo: true,
        imagem: "webcam.jpg"
      },
      {
        id: 7,
        nome: "Galaxy S10+",
        valor: 3000.00,
        ativo: false,
        imagem: "celular.jpg"
      },
      {
        id: 8,
        nome: "Mousepad Microsoft",
        valor: 5.50,
        ativo: false,
        imagem: "mousepad.jpg"
      },
      {
        id: 9,
        nome: "Go Pro 8",
        valor: 300.00,
        ativo: false,
        imagem: "gopro.jpg"
      }
    ];
  }
  obterTodos(estado: string): Produto[] {
    if(estado === 'ativos') {
      return this.produtos.filter(produto => produto.ativo);
    }
    return this.produtos;
  }

  obterPorId(id: number): Produto {
    return this.produtos.find(produto => produto.id == id);
  }
}
