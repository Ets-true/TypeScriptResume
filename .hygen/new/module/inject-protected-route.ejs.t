---
to: "<%= protected ? 'src/app/app.component.tsx' : null %>"
inject: true
skip_if: "<%= moduleName + 'Route.route' %>"
after: "Protected routes"
---
          <Route path={<%= moduleName %>Route.route} element={<<%= moduleName %>Route />} />