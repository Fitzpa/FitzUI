import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    classNames: {
      control: 'text',
    },
    direction: {
      control: 'text',
    },
    justify: {
      control: 'text',
    },
    align: {
      control: 'text',
    },
    wrap: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    classNames: 'primary',
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'nowrap',
    children: 'test',
  },
};

export const Secondary: Story = {
  args: {
    classNames: 'secondary',
    direction: 'row',
    justify: 'center',
    align: 'center',
    wrap: 'nowrap',
    children: 'test',
  },
};

