---
to: "<%= !protected ? `${path}/${route_file_name}.tsx` : null %>"
---
import React from 'react';
import { <%= page_name %> } from '.';

export const <%= page_name %>Route = () => <<%= page_name %> />;
<%= page_name %>Route.route = '/<%= kebab_name %>';
