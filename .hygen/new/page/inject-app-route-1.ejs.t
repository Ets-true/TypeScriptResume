---
to: src/app/app.component.tsx
inject: true
skip_if: "<%= !protected %>"
after: "Protected routes"
---
          <Route path={<%= page_name %>Route.route} element={<<%= page_name %>Route />} />