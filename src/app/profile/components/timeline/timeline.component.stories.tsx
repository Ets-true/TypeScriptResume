import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Timeline } from '.';

type Props = React.ComponentProps<typeof Timeline>;

const csf: Meta = {
  title: 'ui/Timeline',
};

const Template: Story<Props> = (args) => <Timeline {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
