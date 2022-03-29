---
to: src/core/state/store.ts
inject: true
skip_if: "import { reducer as <%= camel_name %> } from '<%= src_relative_path %>/<%= kebab_name %>.slice'"
after: "import createSagaMiddleware from 'redux-saga';"
---
import * as <%= camel_name %> from '<%= src_relative_path %>/<%= kebab_name %>.slice'