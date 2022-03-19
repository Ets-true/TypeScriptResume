---
to: <%= path %>/<%= kebab_name %>.saga.tsx
---

export function* <%= camel_name %>Saga() {
  yield '<%= page_name %> Saga'
}