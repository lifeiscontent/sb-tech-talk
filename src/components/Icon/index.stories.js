import React from 'react';
import { Icon } from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export function Example({ name, size }) {
  return <Icon name={name} size={size} />;
}

Example.story = {
  args: {
    name: 'r-bookmark-plus',
  },
};
