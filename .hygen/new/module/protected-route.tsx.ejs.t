---
to: "<%= protected ? `${path}/${routeFileName}.tsx` : null %>"
---
import React from 'react';
import { RequiredAuth } from 'core/components';
import { <%= moduleName %> } from '.';

export const <%= moduleName %>Route = () => (
  <RequiredAuth>
    <<%= moduleName %> />
  </RequiredAuth>
);

<%= moduleName %>Route.route = '/<%= kebabRoute %>';