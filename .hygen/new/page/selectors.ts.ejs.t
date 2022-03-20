---
to: <%= path %>/<%= kebab_name %>.selectors.tsx
---
import { RootState } from 'core/state/store';

export const selectLoading = (state: RootState) => state.<%= camel_name %>.loading;