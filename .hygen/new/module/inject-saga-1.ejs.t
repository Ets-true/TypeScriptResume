---
to: "<%= stateType === 'Redux' ? paths.fromRoot.rootSaga : null %>"
inject: true
after: "appSagas\\(\\),"
---
    <%= camelName %>Saga(),