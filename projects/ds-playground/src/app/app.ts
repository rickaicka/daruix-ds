import { Component, signal } from '@angular/core';
import { Botao } from './botao/botao';

@Component({
  selector: 'app-root',
  imports: [Botao],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ds-playground');
}
