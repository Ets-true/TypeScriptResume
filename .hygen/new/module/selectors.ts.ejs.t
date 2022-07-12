---
to: "<%= stateType === 'Redux' ? `${path}/${kebabName}.selectors.ts` : null %>"
---
import { RootReduxState } from '<%= paths.fromHome.reduxStore %>';

export const selectLoading = (state: RootReduxState) => state.<%= camelName %>.loading;
