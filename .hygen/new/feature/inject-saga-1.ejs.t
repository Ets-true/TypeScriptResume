---
to: <%= (stateType === 'Redux' && 'src/core/state/saga.ts') || null %>
inject: true
after: "appSagas\\(\\),"
---
    <%= h.changeCase.camel(pluralName) %>Saga(),