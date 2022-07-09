---
to: "<%= stateType === 'Redux' ? paths.fromRoot.reduxStore : null %>"
inject: true
skip_if: "import { reducer as <%= camelName %> } from '<%= srcRelativePath %>/<%= kebabName %>.slice'"
after: "import * as app from 'app/app.slice';"
---
import * as <%= camelName %> from '<%= srcRelativePath %>/<%= kebabName %>.slice'