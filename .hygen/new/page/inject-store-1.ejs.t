---
to: src/core/state/store.ts
inject: true
skip_if: "<%= camel_name %>: <%= camel_name %>.reducer,"
after: "app: app.reducer,"
---
    <%= camel_name %>: <%= camel_name %>.reducer,