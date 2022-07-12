---
to: <%= (stateType === 'Redux' && 'src/core/state/redux.store.ts') || null %>
inject: true
skip_if: "<%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.<%= h.changeCase.camel(pluralName) %>InitialState,"
after: "app: app.appInitialState,"
---
  <%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.<%= h.changeCase.camel(pluralName) %>InitialState,