---
to: src/core/state/saga.ts
inject: true
after: "import { appSagas } from 'app/app.saga';"
---
import { <%= camel_name %>Saga } from '<%= src_relative_path %>/<%= saga_file_name %>';