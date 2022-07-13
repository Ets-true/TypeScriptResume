---
to: "<%= !protected ? `${path}/${routeFileName}.tsx` : null %>"
---
import React from 'react';
import { <%= moduleName %> } from '.';

export const <%= moduleName %>Route = () => <<%= moduleName %> />;
<%= moduleName %>Route.route = '/<%= kebabName %>';
