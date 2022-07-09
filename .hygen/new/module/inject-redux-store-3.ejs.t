---
to: "<%= stateType === 'Redux' ? paths.fromRoot.reduxStore : null %>"
inject: true
skip_if: "<%= camelName %>: <%= camelName %>.<%= camelName %>InitialState,"
after: "app: app.appInitialState,"
---
  <%= camelName %>: <%= camelName %>.<%= camelName %>InitialState,