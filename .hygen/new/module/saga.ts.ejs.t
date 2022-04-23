---
to: <%= path %>/<%= kebab_name %>.saga.tsx
---

export function* <%= camel_name %>Saga() {
  yield '<%= module_name %> Saga';
}
