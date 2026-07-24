import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideRouter } from '@angular/router';

import { CardSquareComponent } from './card-square.component';

const meta: Meta<CardSquareComponent> = {
  title: 'Components/Card Square',
  component: CardSquareComponent,
  tags: ['autodocs'],

  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],

  argTypes: {
    nome: {
      control: 'text',
      description: 'Nome apresentado no cabeçalho do card.',
      table: {
        category: 'Conteúdo',
        type: {
          summary: 'string',
        },
      },
    },

    icone: {
      control: 'text',
      description: 'Nome do ícone registrado no HubIconComponent.',
      table: {
        category: 'Conteúdo',
        type: {
          summary: 'string',
        },
      },
    },

    rota: {
      control: 'text',
      description: 'Rota acessada pelo cabeçalho e pelo rodapé.',
      table: {
        category: 'Comportamento',
        type: {
          summary: 'string',
        },
      },
    },

    color: {
      control: 'color',
      description: 'Cor utilizada no ícone do módulo.',
      table: {
        category: 'Aparência',
        type: {
          summary: 'string',
        },
      },
    },

    textFooter: {
      control: 'text',
      description: 'Texto do rodapé quando o card não possui filhos.',
      table: {
        category: 'Conteúdo',
        type: {
          summary: 'string',
        },
      },
    },

    children: {
      control: 'object',
      description: 'Itens filhos. A quantidade é apresentada no texto “Ver todos”.',
      table: {
        category: 'Dados',
        type: {
          summary: 'unknown[]',
        },
      },
    },

    modulos: {
      control: 'object',
      description: 'Lista de módulos associada ao card.',
      table: {
        category: 'Dados',
        type: {
          summary: 'unknown[]',
        },
      },
    },
  },

  args: {
    nome: 'Propostas',
    icone: 'propostas',
    rota: '/propostas',
    color: '#C00D0E',
    textFooter: 'Acessar módulo',
    children: [],
    modulos: [],
  },
};

export default meta;

type Story = StoryObj<CardSquareComponent>;

export const Primary: Story = {
  args: {
    nome: 'Propostas',
    icone: 'propostas',
    rota: '/propostas',
    color: '#C00D0E',
    textFooter: 'Acessar módulo',
  },
};

export const WithChildren: Story = {
  args: {
    nome: 'Obras',
    icone: 'obras',
    rota: '/obras',
    color: '#2563EB',
    children: [
      {
        nome: 'Consultar obras',
        rota: '/obras/consulta',
      },
      {
        nome: 'Diário de obra',
        rota: '/obras/diario',
      },
      {
        nome: 'Relatórios',
        rota: '/obras/relatorios',
      },
    ],
  },

  render: (args) => ({
    props: args,
    template: `
      <drx-card-square
        [nome]="nome"
        [icone]="icone"
        [rota]="rota"
        [color]="color"
        [children]="children"
        [textFooter]="textFooter"
      >
        <div style="
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-block: 12px;
        ">
          <span>Consultar obras</span>
          <span>Diário de obra</span>
          <span>Relatórios</span>
        </div>
      </drx-card-square>
    `,
  }),
};

export const WithoutChildren: Story = {
  args: {
    nome: 'Financeiro',
    icone: 'financeiro',
    rota: '/financeiro',
    color: '#16A34A',
    children: [],
    textFooter: 'Abrir Financeiro',
  },
};

export const CustomColor: Story = {
  args: {
    nome: 'Memorando de Remessas',
    icone: 'memorando',
    rota: '/remessas',
    color: '#7C3AED',
    children: [
      {
        nome: 'Consultar memorandos',
        rota: '/remessas',
      },
      {
        nome: 'Novo memorando',
        rota: '/remessas/novo',
      },
    ],
  },
};

export const Playground: Story = {
  args: {
    nome: 'Aplicativos',
    icone: 'aplicativos',
    rota: '/dashboard',
    color: '#C00D0E',
    children: [],
    textFooter: 'Ver aplicativo',
  },
};
