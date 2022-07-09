---
to: "<%= stateType === 'Redux' ? paths.rootSaga : null %>"
inject: true
after: "appSagas\\(\\),"
---
    <%= camelName %>Saga(),