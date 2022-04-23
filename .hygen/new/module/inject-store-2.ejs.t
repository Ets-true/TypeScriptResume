---
to: src/core/state/store.ts
inject: true
skip_if: "import { reducer as <%= camel_name %> } from '<%= src_relative_path %>/<%= kebab_name %>.slice'"
after: "import * as app from 'app/app.slice';"
---
import * as <%= camel_name %> from '<%= src_relative_path %>/<%= kebab_name %>.slice'