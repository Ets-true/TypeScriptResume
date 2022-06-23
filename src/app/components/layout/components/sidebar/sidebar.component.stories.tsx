import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PureSidebar } from '.';
import { StoreWrapper } from 'core/storybook';

type Props = React.ComponentProps<typeof PureSidebar>;

const csf: Meta = {
  title: 'layout/Sidebar',
};

const Template: Story<Props> = (args) => (
  <StoreWrapper>
    <PureSidebar {...args} />
  </StoreWrapper>
);

export const c1 = Template.bind({});
c1.storyName = 'default';
c1.args = { showSidebar: true };

export default csf;
