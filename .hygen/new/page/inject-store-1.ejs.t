---
to: src/core/state/store.ts
inject: true
skip_if: "<%= camel_name %>,"
after: "reducer: {"
---
    <%= camel_name %>,