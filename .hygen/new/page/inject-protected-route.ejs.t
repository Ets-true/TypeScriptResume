---
to: "<%= protected ? 'src/app/app.component.tsx' : null %>"
inject: true
skip_if: "<%= page_name + 'Route.route' %>"
after: "Protected routes"
---
          <Route path={<%= page_name %>Route.route} element={<<%= page_name %>Route />} />