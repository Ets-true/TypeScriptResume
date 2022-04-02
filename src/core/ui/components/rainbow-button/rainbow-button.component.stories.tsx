import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as types from 'styled-components/cssprop';

import { RainbowButton } from '.';

type Props = React.ComponentProps<typeof RainbowButton>;

const csf: Meta = {
  title: 'ui/RainbowButton',
};

const Template: Story<Props> = (args) => (
  <RainbowButton {...args}>Hello rainbow</RainbowButton>
);

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
