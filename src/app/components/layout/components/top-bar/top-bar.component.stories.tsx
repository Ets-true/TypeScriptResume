import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PureTopBar } from '.';
import { StorybookStoreWrapper } from 'core/storybook';

type Props = React.ComponentProps<typeof PureTopBar>;

const csf: Meta = {
  title: 'layout/header/TopBar',
};

const Template: Story<Props> = (args) => (
  <StorybookStoreWrapper>
    <PureTopBar {...args} />
  </StorybookStoreWrapper>
);

export const c1 = Template.bind({});
c1.storyName = 'default';
c1.args = { title: 'Заголовок test here' };

export default csf;
