---
to: src/app/app.component.tsx
inject: true
skip_if: "<%= page_name + 'Route.route' %>"
after: "Protected routes"
---
<% if(protected){ %>          <Route path={<%= page_name %>Route.route} element={<<%= page_name %>Route />} /><% } %>