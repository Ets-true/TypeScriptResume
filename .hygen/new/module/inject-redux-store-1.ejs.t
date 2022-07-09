---
to: "<%= stateType === 'Redux' ? paths.reduxStore : null %>"
inject: true
skip_if: "<%= camelName %>: <%= camelName %>.reducer,"
after: "app: app.reducer,"
---
    <%= camelName %>: <%= camelName %>.reducer,