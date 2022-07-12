---
to: <%= (stateType === 'Redux' && 'src/core/state/saga.ts') || null %>
inject: true
after: "import { appSagas } from 'app/app.saga';"
---
import { <%= h.changeCase.camel(pluralName) %>Saga } from '<%= sagaPath %>';