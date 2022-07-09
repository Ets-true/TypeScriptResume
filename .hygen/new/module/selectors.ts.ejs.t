---
to: "<%= stateType === 'Redux' ? `${path}/${kebabName}.selectors.ts` : null %>"
---
import { RootState } from 'core/state/store';

export const selectLoading = (state: RootState) => state.<%= camelName %>.loading;
