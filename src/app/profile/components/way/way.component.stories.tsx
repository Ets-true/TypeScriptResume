import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Way } from '.';

type Props = React.ComponentProps<typeof Way>;

const csf: Meta = {
  title: 'ui/Way',
};

const Template: Story<Props> = (args) => <Way {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
