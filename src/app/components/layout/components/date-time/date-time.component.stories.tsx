import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateTime } from '.';

type Props = React.ComponentProps<typeof DateTime>;

const csf: Meta = {
  title: 'layout/header/DateTime',
};

const Template: Story<Props> = (args) => <DateTime {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
