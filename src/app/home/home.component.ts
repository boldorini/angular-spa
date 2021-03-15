import { Component, OnInit } from '@angular/core';

import { Aluno } from '../model/aluno';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: Aluno[] = [
    { nome: "Claudio", idade: 43, email:"boldorini@gmail.com", curso:"Computação Aplicada"},
    { nome: "Luciana", idade: 42, email:"lucianagaleani@gmail.com", curso:"Pedagogia"},
    { nome: "teste", idade: 18, email:"teste@teste.com", curso:"Arquitetura"},
    { nome: "teste de teste", idade: 20, email:"testedeteste@teste.com", curso:"Engenharia"}
  ];

  displayedColumns: string[] = ['Nome','Idade','E-mail','Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor():void{
    this.valor++;
  }

  reiniciarValor():void{
    this.valor = 0;
  }

  exibirTabela(): void{
    this.exibeTabela = true;
  }

}
