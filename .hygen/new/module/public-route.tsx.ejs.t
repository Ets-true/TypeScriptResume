---
to: "<%= !protected ? `${path}/${route_file_name}.tsx` : null %>"
---
import React from 'react';
import { <%= module_name %> } from '.';

export const <%= module_name %>Route = () => <<%= module_name %> />;
<%= module_name %>Route.route = '/<%= kebab_name %>';
