import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Info } from '.';

type Props = React.ComponentProps<typeof Info>;

const csf: Meta = {
  title: 'ui/Info',
};

const Template: Story<Props> = (args) => <Info {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
