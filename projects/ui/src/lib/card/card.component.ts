import { Component, computed, input } from '@angular/core';
import { LucideCircleQuestionMark, LucideDynamicIcon, LucideStar } from '@lucide/angular';
import { HubIconComponent } from '../../../../ds-playground/src/app/icons/hub-icon.component';
import { getHubIcon } from '../../../../ds-playground/src/app/icons/hub-icon.mapper';

export type DrxCardSize = 'medium' | 'small' | 'large';

@Component({
  selector: 'drx-card',
  imports: [LucideDynamicIcon, LucideCircleQuestionMark, HubIconComponent, LucideStar],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  size = input<DrxCardSize>('medium');
  moduloColor = input<string>('#c00d0e');
  icon = input<string | undefined | null>('icon');
  title = input<string>('');
  description = input<string>('description');
  favorite = input<string>('favorite');
  platform = input<string[]>([]);

  cardClasses = computed(() => {
    const classes = ['drx-card', `drx-card--${this.size()}`];
    return classes.join(' ');
  });

  readonly iconComponent = computed(() => getHubIcon(this.icon()));
}

