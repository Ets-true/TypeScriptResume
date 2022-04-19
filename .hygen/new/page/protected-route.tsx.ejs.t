---
to: "<%= protected ? `${path}/${route_file_name}.tsx` : null %>"
---
import React from 'react';
import { RequiredAuth } from 'core/components';
import { <%= page_name %> } from '.';

export const <%= page_name %>Route = () => (
  <RequiredAuth>
    <<%= page_name %> />
  </RequiredAuth>
);

<%= page_name %>Route.route = '/<%= kebab_name %>';