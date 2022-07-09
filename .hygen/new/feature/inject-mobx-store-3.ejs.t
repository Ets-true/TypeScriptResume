---
to: <%= (stateType.indexOf('Mobx') !== -1 && 'src/core/state/mobx.store.tsx') || null %>
inject: true
after: "// ====== >>> Generate inicialize store here ====== >>>"
---
    this.<%= pluralName %> = new <%= pluralPascalName %>Store(this);