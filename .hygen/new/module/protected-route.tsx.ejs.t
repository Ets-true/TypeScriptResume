---
to: "<%= protected ? `${path}/${route_file_name}.tsx` : null %>"
---
import React from 'react';
import { RequiredAuth } from 'core/components';
import { <%= module_name %> } from '.';

export const <%= module_name %>Route = () => (
  <RequiredAuth>
    <<%= module_name %> />
  </RequiredAuth>
);

<%= module_name %>Route.route = '/<%= kebab_route %>';