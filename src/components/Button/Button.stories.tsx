import { Meta, Story } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Basic: Story = (args) => <Button {...args} />;

Basic.args = {
  children: 'Buy now',
};

export const WithIcon: Story = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};

export const AsLink: Story = (args) => <Button {...args} />;

AsLink.args = {
  as: 'a',
  size: 'large',
  href: '/link',
  children: 'Buy now',
};
