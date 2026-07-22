import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';
import { fn } from 'storybook/test';

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
      table: {
        category: 'Estado',
      },
    },

    favoritable: {
      control: 'boolean',
      table: {
        category: 'Comportamento',
      },
    },

    navigable: {
      control: 'boolean',
      table: {
        category: 'Comportamento',
      },
    },

    navigate: {
      control: false,
      description: 'Emitido quando a navegação é acionada.',
      table: {
        category: 'Eventos',
        type: {
          summary: '() => void',
        },
      },
    },

    favoriteChange: {
      control: false,
      description: 'Emitido quando o favorito é alterado.',
      table: {
        category: 'Eventos',
        type: {
          summary: '(favorite: boolean) => void',
        },
      },
    },

    icon: {
      control: 'text',
    },

    title: {
      control: 'text',
    },

    description: {
      control: 'text',
    },

    platform: {
      control: 'object',
    },
  },

  args: {
    size: 'medium',
    moduloColor: '#C00D0E',
    icon: '',
    title: 'Card',
    description: '',
    platform: [],

    favorite: false,
    favoritable: true,
    navigable: true,

    navigate: fn().mockName('navigate'),
    favoriteChange: fn().mockName('favoriteChange'),
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    size: 'small',
    title: 'Primary Card',
    favoritable: true,
    favorite: true,
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    title: 'Secondary Card',
  },
};

export const Tertiary: Story = {
  args: {
    size: 'large',
    title: 'Tertiary Card',
    favoritable: false,
  },
};

export const Favorite: Story = {
  args: {
    size: 'medium',
    title: 'Favorite Card',
    favorite: true,
    favoritable: true,
  },
};

export const WithoutFavoriteAction: Story = {
  args: {
    size: 'medium',
    title: 'Card sem favorito',
    favoritable: false,
  },
};
