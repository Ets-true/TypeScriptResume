---
to: src/app/app.component.tsx
after: "import { HomeRoute } from './home';"
inject: true
---
import { <%= page_name %>Route } from '<%= src_relative_path %>/<%= kebab_name %>.route';