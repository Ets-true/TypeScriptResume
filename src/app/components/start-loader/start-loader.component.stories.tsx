import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StartLoader } from '.';

type Props = React.ComponentProps<typeof StartLoader>;

const csf: Meta = {
  title: 'ui/StartLoader',
};

const Template: Story<Props> = (args) => <StartLoader {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
