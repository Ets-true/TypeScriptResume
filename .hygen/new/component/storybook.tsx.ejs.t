---
to: "<%= generateStory ? `${path}/${component_file_name}.stories.tsx` : null %>"
---
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StorybookStoreWrapper } from 'core/storybook';

import { <%= component_name %> } from '.';

type Props = React.ComponentProps<typeof <%= component_name %>>;

const csf: Meta = {
  title: 'ui/<%= component_name %>',
};

const Template: Story<Props> = args => (
  <StorybookStoreWrapper>
    <<%= component_name %> {...args} />
  </StorybookStoreWrapper>
);

export const c1 = Template.bind({});
c1.storyName = 'default';

export default csf;