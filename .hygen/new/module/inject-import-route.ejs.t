---
to: src/app/app.component.tsx
after: "import { HomeRoute } from './home';"
inject: true
---
import { <%= moduleName %>Route } from '<%= srcRelativePath %>/<%= kebabName %>.route';