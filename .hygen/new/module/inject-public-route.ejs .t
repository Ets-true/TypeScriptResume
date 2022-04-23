---
to: "<%= !protected ? 'src/app/app.component.tsx' : null %>"
inject: true
skip_if: "<%= module_name + 'Route.route' %>"
after: "Public routes"
---
          <Route path={<%= module_name %>Route.route} element={<<%= module_name %>Route />} />