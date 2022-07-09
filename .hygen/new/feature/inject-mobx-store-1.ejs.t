---
to: <%= (stateType.indexOf('Mobx') !== -1 && 'src/core/state/mobx.store.tsx') || null %>
inject: true
after: "\/\/ ====== >>> Generate import store here ====== >>>"
---
import { <%= pluralPascalName %>Store } from '<%= storePath %>';