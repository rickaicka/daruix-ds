import { Component, computed, input } from '@angular/core';

export type DrxCardSize = 'medium' | 'small' | 'large';

@Component({
  selector: 'drx-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  size = input<DrxCardSize>('medium');

  cardClasses = computed(() => {
    const classes = [
      'drx-card',
      `drx-card--${this.size()}`,
    ];
    return classes.join(' ');
  });
}

