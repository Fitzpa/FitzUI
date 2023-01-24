import type { Meta, StoryObj } from '@storybook/react';

import LinkItem from './linkItem';

const meta: Meta<typeof LinkItem> = {
  title: 'Components/LinkItem',
  component: LinkItem,
  tags: ['autodocs'],
  argTypes: {
    classNames: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
    href: {
      control: 'text',
    }
  },
};

export default meta;
type Story = StoryObj<typeof LinkItem>;

export const Primary: Story = {
  args: {
    classNames: "test",
    target: '_blank',
    href: 'https://www.google.com',
  },
};