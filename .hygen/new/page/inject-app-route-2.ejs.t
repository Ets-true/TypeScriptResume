---
to: src/app/app.component.tsx
inject: true
skip_if: "<%= !protected %>"
after: "import { HomeRoute } from './home';"
---
import { <%= page_name %>Route } from '<%= src_relative_path %>/<%= kebab_name %>.route';
