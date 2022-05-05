---
to: src/core/state/store.ts
inject: true
skip_if: "import * as <%= h.changeCase.camel(pluralName) %> from '<%= slicePath %>';"
after: "app/app.slice"
---
import * as <%= h.changeCase.camel(pluralName) %> from '<%= slicePath %>';