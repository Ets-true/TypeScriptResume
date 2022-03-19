---
to: <%= path %>/<%= component_file_name %>.stories.tsx
---
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { <%= component_name %> } from '.'

type Props = React.ComponentProps<typeof <%= component_name %>>

const csf: Meta = {
  title: 'ui/<%= component_name %>',
}

const Template: Story<Props> = args => <<%= component_name %> {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf