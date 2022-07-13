---
to: <%= (stateType.indexOf('Mobx') !== -1 && 'src/core/state/mobx.store.tsx') || null %>
inject: true
after: "export class RootMobxStore {"
---
  <%= camelName %>: <%= pascalName %>Store;