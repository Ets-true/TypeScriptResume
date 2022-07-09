---
to: "<%= stateType === 'Redux' ? `${path}/${kebabName}.selectors.ts` : null %>"
---
import { RootState } from '<%= paths.reduxStore %>';

export const selectLoading = (state: RootState) => state.<%= camelName %>.loading;
