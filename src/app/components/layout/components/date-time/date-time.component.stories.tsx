import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateTime } from '.';
import { StorybookStoreWrapper } from 'core/storybook';

type Props = React.ComponentProps<typeof DateTime>;

const csf: Meta = {
  title: 'layout/header/DateTime',
};

const Template: Story<Props> = (args) => (
  <StorybookStoreWrapper>
    <DateTime {...args} />
  </StorybookStoreWrapper>
);

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
