---
to: <%= (stateType === 'Redux' && 'src/core/state/redux.store.ts') || null %>
inject: true
skip_if: "<%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.reducer,"
after: "app: app.reducer,"
---
  <%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.reducer,