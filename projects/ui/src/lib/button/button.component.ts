import { Component, computed, input } from '@angular/core';

export type DrxButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type DrxButtonSize = 'medium' | 'small';
export type DrxButtonType = 'button' | 'submit' | 'reset';
export type DrxButtonFont = 'quicksand' | 'gothic' | 'raleway';

@Component({
  selector: 'drx-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  variant = input<DrxButtonVariant>('primary');
  size = input<DrxButtonSize>('medium');
  disabled = input(false);
  type = input<DrxButtonType>('button');
  font = input<DrxButtonFont>('quicksand');

  buttonClasses = computed(() => {
    const classes = [
      'drx-button',
      `drx-button--${this.variant()}`,
      `drx-button--font-${this.font()}`,
    ];

    if (this.size() === 'small') {
      classes.push('drx-button--small');
    }

    return classes.join(' ');
  });
}
