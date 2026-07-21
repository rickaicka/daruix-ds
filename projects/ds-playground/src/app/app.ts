import { Component, signal } from '@angular/core';
import { Botao } from './botao/botao';
import { CardComponent } from '../../../ui/src/lib/card/card.component';

@Component({
  selector: 'app-root',
  imports: [Botao,CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ds-playground');
}
