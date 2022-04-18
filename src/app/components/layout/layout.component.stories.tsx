import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Layout } from '.';

type Props = React.ComponentProps<typeof Layout>;

const csf: Meta = {
  title: 'ui/Layout',
};

const Template: Story<Props> = (args) => <Layout {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
