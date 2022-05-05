---
to: src/core/state/saga.ts
inject: true
after: "appSagas\\(\\),"
---
    <%= h.changeCase.camel(pluralName) %>Saga(),