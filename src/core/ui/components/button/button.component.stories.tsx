import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '.';

type Props = React.ComponentProps<typeof Button>;

const csf: Meta = {
  title: 'ui/Button',
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;
