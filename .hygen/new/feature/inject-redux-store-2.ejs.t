---
to: <%= (stateType === 'Redux' && 'src/core/state/redux.store.ts') || null %>
inject: true
skip_if: "import * as <%= h.changeCase.camel(pluralName) %> from '<%= slicePath %>';"
after: "app/app.slice"
---
import * as <%= h.changeCase.camel(pluralName) %> from '<%= slicePath %>';