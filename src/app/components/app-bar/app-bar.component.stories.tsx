import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppBar } from '.';

type Props = React.ComponentProps<typeof AppBar>;

const csf: Meta = {
  title: 'ui/AppBar',
};

const Template: Story<Props> = (args) => <AppBar {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
