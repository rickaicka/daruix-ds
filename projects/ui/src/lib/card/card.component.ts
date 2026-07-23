import { Component, computed, input, model, output } from '@angular/core';

import { HubIconComponent } from '../icons/hub-icon.component';

export type DrxCardSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'drx-card',
  standalone: true,
  imports: [HubIconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly size = input<DrxCardSize>('medium');
  readonly moduloColor = input<string>('#c00d0e');
  readonly icon = input<string | null>(null);
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly platform = input<string[]>([]);
  readonly favorite = model<boolean>(false);
  readonly favoritable = input<boolean>(true);
  readonly navigable = input<boolean>(false);
  readonly cardClasses = computed(() => ['drx-card', `drx-card--${this.size()}`].join(' '));

  readonly navigate = output<void>();

  protected onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();

    this.favorite.update((currentValue) => !currentValue);
  }
  protected onNavigateClick(event: MouseEvent): void {
    event.stopPropagation();

    if (!this.navigable()) {
      return;
    }

    this.navigate.emit();
  }
}
