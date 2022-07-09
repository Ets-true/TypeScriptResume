---
to: "<%= stateType === 'Redux' ? paths.reduxStore : null %>"
inject: true
skip_if: "<%= camelName %>: <%= camelName %>.<%= camelName %>InitialState,"
after: "app: app.appInitialState,"
---
  <%= camelName %>: <%= camelName %>.<%= camelName %>InitialState,