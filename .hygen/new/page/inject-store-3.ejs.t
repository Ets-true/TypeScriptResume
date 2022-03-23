---
to: src/core/state/store.ts
inject: true
skip_if: "<%= camel_name %>: <%= camel_name %>InitialState,"
after: "app,"
---
  <%= camel_name %>: <%= camel_name %>InitialState,