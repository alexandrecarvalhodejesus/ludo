import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogadorComponent } from "./jogador/jogador.component";
import { NgFor, NgStyle } from '@angular/common';
import { JogadorModel } from './jogador.model';
import { CaminhoJogo } from './caminho-jogo.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JogadorComponent, NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'primeiroprojeto';
// jogadores: string[] = ['jogador1',  'ngjogador2', 'jogador3', 'jogador4'];
  jogadores: JogadorModel [] = []; 
  quadradinho: any;
  ngOnInit(): void
  {
   const jogador1 = new JogadorModel("blue",'TopoEsquerda');
   const jogador2 = new JogadorModel("red",'TopoDireita');
   const jogador3 = new JogadorModel("green",'BaseEsquerda');
   const jogador4 = new JogadorModel("yellow",'BaseDireita');
   

   this.jogadores.push(jogador1);
   this.jogadores.push(jogador2);
   this.jogadores.push(jogador3);
   this.jogadores.push(jogador4);


  // Criando os Quadradinhos
   for (let i = 0; i < 4; i++) {
    const quadradinho = new CaminhoJogo(false, false, 'pink', '50px', '50px', [], `${i * 20}`, '3px');
    this.quadradinho.push(quadradinho);
  }
  }
}