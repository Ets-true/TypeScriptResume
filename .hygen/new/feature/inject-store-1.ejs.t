---
to: src/core/state/store.ts
inject: true
skip_if: "<%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.reducer,"
after: "app: app.reducer,"
---
    <%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.camel(pluralName) %>.reducer,