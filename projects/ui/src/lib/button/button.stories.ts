import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `
      <drx-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [type]="type"
      >
        Botão Primário
      </drx-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `
      <drx-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [type]="type"
      >
        Botão Secundário
      </drx-button>
    `,
  }),
};

export const TertiarySmall: Story = {
  args: {
    variant: 'tertiary',
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `
      <drx-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [type]="type"
      >
        Ver mais
      </drx-button>
    `,
  }),
};
