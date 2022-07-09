---
to: "<%= stateType === 'Redux' ? paths.rootSaga : null %>"
inject: true
after: "import { appSagas } from 'app/app.saga';"
---
import { <%= camelName %>Saga } from '<%= srcRelativePath %>/<%= sagaFileName %>';