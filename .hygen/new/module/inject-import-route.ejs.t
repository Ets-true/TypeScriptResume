---
to: src/app/app.component.tsx
after: "import { HomeRoute } from './home';"
inject: true
---
import { <%= module_name %>Route } from '<%= src_relative_path %>/<%= kebab_name %>.route';