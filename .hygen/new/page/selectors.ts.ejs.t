---
to: <%= path %>/<%= kebab_name %>.selectors.tsx
---
import { createSelector } from 'reselect'

import { RootState } from 'store'
import { <%= camel_name %>InitialState } from './<%= kebab_name %>.slice'

const <%= camel_name %> = (state: RootState) => state.<%= camel_name %> || <%= camel_name %>InitialState

export const selectLoading = createSelector(<%= camel_name %>, <%= camel_name %> => <%= camel_name %>.loading)