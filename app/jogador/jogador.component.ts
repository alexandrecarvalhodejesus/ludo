import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-jogador',
  standalone: true,
  imports: [
    CommonModule, NgFor, NgStyle
  ],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JogadorComponent {
  @Input() cor!: string;
  pinos: string[] = ['pino1', 'pino2', 'pino3', 'pino4'];
  ngOnInit(): void {
    
  }
}