---
to: src/core/state/saga.ts
inject: true
after: "import { appSagas } from 'app/app.saga';"
---
import { <%= h.changeCase.camel(pluralName) %>Saga } from '<%= sagaPath %>';