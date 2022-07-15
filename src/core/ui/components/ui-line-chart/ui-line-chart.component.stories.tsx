import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UiLineChart } from '.';

type Props = React.ComponentProps<typeof UiLineChart>;

const csf: Meta = {
  title: 'ui/UiLineChart',
};

const Template: Story<Props> = (args) => <UiLineChart {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
