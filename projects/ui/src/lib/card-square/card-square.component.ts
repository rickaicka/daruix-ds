import { Component, inject, input } from '@angular/core';
import { HubIconComponent } from 'ui';
import { Router } from '@angular/router';

export type DrxCarSquareType = 'list' | 'state' | 'card'

@Component({
  selector: 'drx-card-square',
  imports: [HubIconComponent],
  templateUrl: './card-square.component.html',
  styleUrl: './card-square.component.scss',
})
export class CardSquareComponent {
  readonly modulos = input<any[]>([]);
  readonly children = input<any[]>([]);
  readonly textFooter = input<string>('');
  readonly nome = input<string>('');
  readonly icone = input<string>('');
  readonly rota = input<string>('');
  readonly color = input<string>('');

  private readonly router = inject(Router);

  cardSquareText = () => {
    if (this.children.length > 0) {
    }
  };

  iconColor(cor_icone: string): string {
    return cor_icone?.trim();
  }

  navigateRoute(route: string): void {
    if (!route) {
      return;
    }

    const cleanRoute = route.replace(/^\/+/, '');
    void this.router.navigateByUrl(`${cleanRoute}`);
  }
}

