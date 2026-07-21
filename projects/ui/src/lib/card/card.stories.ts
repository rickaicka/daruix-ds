import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    moduloColor: {
      control: 'color',
    },
    favorite: {
      control: 'boolean',
    }
  },
  args: {
    size: 'medium',
    moduloColor: '#C00D0E',
    favorite: 'false',
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    size: 'small',
    moduloColor: '#C00D0E',
    description: '',
    icon: '',
    platform: [''],
    title: 'Primary Card',
    favorite: 'false'
  },
  render: (args) => ({
    props: args,
    template: `
      <drx-card [size]="size" [icon]="icon" [favorite]="favorite" [moduloColor]="moduloColor" [description]="description" [title]="title" [platform]="platform"></drx-card>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `
      <drx-card [size]="size">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tempus tincidunt. Fusce quis lacus quis velit consectetur luctus. Nam consectetur ornare est, at mollis purus tincidunt ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis tristique eros.
        </p>
      </drx-card>
    `,
  }),
};

export const TertiaryLarge: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `
      <drx-card [size]="size">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tempus tincidunt. Fusce quis lacus quis velit consectetur luctus. Nam consectetur ornare est, at mollis purus tincidunt ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis tristique eros.
        </p>
      </drx-card>
    `,
  }),
};
